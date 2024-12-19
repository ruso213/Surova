import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   ButtonComponent, CarouselComponent, CommentsComponent, GraphComponent, HeaderComponent, letterDirective, ProductDetailsComponent, ProductTargetComponent, ShowProductImgsComponent } from '@surova/ui';
import { ActivatedRoute } from '@angular/router';
import { Product, statistic, statisticsGenerator, StoreService } from '@surova/utils';
import { BuyService } from '../../services/buy.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
    HeaderComponent, 
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
  buyService =inject(BuyService)
  product !: Product
  graph :statistic[]=[]
  principalImg = ''
  id : null|string = ''
  ngOnInit(): void {
    this.id =this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.storeService.getProductByID(this.id).then(i => {
        this.product = i as Product
        const rating = this.product.reviews.map(i => i.rating)
        this.graph=statisticsGenerator(rating)

      })
      
    }

  }
  
  addToCart(){
    if (this.id) {
      this.buyService.addToCart(this.id)
      
    }
  }
}

