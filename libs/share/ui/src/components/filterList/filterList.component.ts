import { Component, inject, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesService, Filt, Filters,  } from '@surova/utils';
import { CustomCheckboxComponent } from '../customCheckbox/customCheckbox.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'lib-filter-list',
  standalone: true,
  imports: [CommonModule, MatIconModule, CustomCheckboxComponent],
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
  filter: Filters[]= [
    {
      id:Filt.RATE,
      text:'Rating',
      options:['1','2','3','4','5']
    },
    {
      id:Filt.PRICE,
      text:'Precio',
      options:['Menos de 500$','500$ - 1000$','1000$-2000$','mas de 2000$']
    },
    {
      id:Filt.INsTOCK,
      text:'Fuera de stock ',
      options:['Si']
    },
  ]
  filterList: string[]=[]

  filterFn(id:Filt,option: string){
    const index = this.filterList.findIndex(i=>i==option)
    console.log(id, id);
    console.log(option);
    
    if (index != -1) {
      this.filterList.splice(index,1)
      this.route.navigate(['category'],{queryParams:this.filterList})

    }else{
      this.filterList.push(option)
      this.route.navigate(['category'],{queryParams:{
        id:option
      }})
    }
    console.log(this.filterList);
    
  }
  categoryLink(link:string){
    this.route.navigate(['category'],{queryParams:[link]})
  }
}
