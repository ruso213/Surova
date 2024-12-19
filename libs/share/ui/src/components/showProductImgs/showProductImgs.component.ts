import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectImageComponent } from '../selectImage/selectImage.component';

@Component({
  selector: 'lib-show-product-imgs',
  standalone: true,
  imports: [CommonModule, SelectImageComponent],
  templateUrl: './showProductImgs.component.html',
  styleUrl: './showProductImgs.component.scss',
})
export class ShowProductImgsComponent {
  imgs = input<string[]>()
  principalImg = ''
  constructor(){
    effect(()=>{
      const isImg = this.imgs()
      if (isImg) {
        this.imgClicked(isImg[0] as string)
      }
    })
  }
  imgClicked(img:string){
    this.principalImg = img
  }
}
