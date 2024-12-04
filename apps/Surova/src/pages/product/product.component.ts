import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {   HeaderComponent } from '@surova/ui';
import { BuyProductTargetComponent } from './components/buyProductTarget/buyProductTarget.component';
import { ActivatedRoute } from '@angular/router';
import { Product, StoreService } from '@surova/utils';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, 
    HeaderComponent, 
    BuyProductTargetComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit{
  activatedRoute =inject(ActivatedRoute)
  storeService =inject(StoreService)
  product !: Product
  ngOnInit(): void {
      const id =this.activatedRoute.snapshot.paramMap.get('id')
      if (id) {
        this.storeService.getProductByID(id).then(i => this.product = i as Product)
      }
  }
}
