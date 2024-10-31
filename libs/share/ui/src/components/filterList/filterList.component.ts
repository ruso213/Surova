import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesService } from '@surova/utils';
import { CustomCheckboxComponent } from '../customCheckbox/customCheckbox.component';
import { Router } from '@angular/router';
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
  categoryService = inject(CategoriesService)
  route= inject(Router)
  principalCategories:string[] = []

  ngOnInit(): void {
    this.categoryService.getProductCategories().then(i => 
      i.forEach(category =>         
        this.principalCategories.push(category)

    ))
  }

  categoryLink(link:string){
    this.route.navigate(['category'],{queryParams:[link]})
  }

  deleteFilters(){
    this.route.navigate(['home'])
  }

  
}
