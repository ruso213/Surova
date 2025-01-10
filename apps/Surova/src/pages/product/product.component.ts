import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   ButtonComponent, CarouselComponent, CommentsComponent, GraphComponent, letterDirective, ProductDetailsComponent, ProductTargetComponent, ShowProductImgsComponent } from '@surova/ui';
import { ActivatedRoute } from '@angular/router';
import { Product, statistic, statisticsGenerator, StoreService } from '@surova/utils';
import { User } from '../../utils/store/user.store';
import { map } from 'rxjs';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
    ShowProductImgsComponent, 
    ProductDetailsComponent, 
    ButtonComponent, 
    CarouselComponent,
    letterDirective, 
    ProductTargetComponent,
    CommentsComponent,
    GraphComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})

export class ProductComponent implements OnInit{
  activatedRoute =inject(ActivatedRoute)
  storeService =inject(StoreService)
  UserStore =inject(User)
  product !: Product
  graph :statistic[]=[]
  principalImg = ''
  id : null|string = ''

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      map(params => params['id'])
    ).subscribe(id => {
      this.id = id;
      if (this.id) {
        this.storeService.getProductByID(this.id).then(i => {
          this.product = i as Product
          const rating = this.product.reviews.map(i => i.rating)
          this.graph=statisticsGenerator(rating)
        }) 
      }
    })

  }
  
  addToCart(){
    if (this.id) {
      this.UserStore.addToCart(this.id)
    }
  }
}

