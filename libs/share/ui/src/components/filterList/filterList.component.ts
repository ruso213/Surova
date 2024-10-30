import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesService, Filters,  } from '@surova/utils';
import { CustomCheckboxComponent } from '../customCheckbox/customCheckbox.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SliderComponent } from '../slider/slider.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'lib-filter-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomCheckboxComponent, SliderComponent, ButtonComponent],
  templateUrl: './filterList.component.html',
  styleUrl: './filterList.component.scss',
})
export class FilterListComponent implements OnInit{
  ngOnInit(): void {
    this.categoryService.getProductCategories().then(i => 
      i.forEach(category =>         
        this.principalCategories.push(category)
    ))
  }

  categoryService = inject(CategoriesService)
  activeRoute = inject(ActivatedRoute)
  route= inject(Router)
  item = input<Filters>()
  principalCategories:string[] = []

  filterList: string[]=[]

  
  categoryLink(link:string){
    this.route.navigate(['category'],{queryParams:[link]})
  }
  deleteFilters(){
    this.route.navigate(['home'])

  }
}
