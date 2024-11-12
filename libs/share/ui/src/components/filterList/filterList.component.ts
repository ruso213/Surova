import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesService } from '@surova/utils';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'lib-filter-list',
  standalone: true,
  imports: [CommonModule,ButtonComponent],
  templateUrl: './filterList.component.html',
  styleUrl: './filterList.component.scss',
})
export class FilterListComponent implements OnInit{
  categoryService = inject(CategoriesService)
  route= inject(Router)
  activeRoute= inject(ActivatedRoute)
  principalCategories:string[] = []
  actualCategory = ''
  ngOnInit(): void {
    this.categoryService.getProductCategories().then(i => 
      i.forEach(category =>         
        this.principalCategories.push(category)
    ))
    this.activeRoute.queryParams.subscribe(i => this.actualCategory = i['category'])
  }

  categoryLink(link:string){
    this.route.navigate([],
      {
        queryParams:{category: link},
        queryParamsHandling:'merge'})
  }

  deleteFilters(){
    this.route.navigate(['store'])
  }

  
}
