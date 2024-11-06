import { Component, output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'lib-no-find-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noFindProducts.component.html',
  styleUrl: './noFindProducts.component.scss',
})
export class NoFindProductsComponent {
  clickEmitter = output()
  click(){
    this.clickEmitter.emit()
  }
}
