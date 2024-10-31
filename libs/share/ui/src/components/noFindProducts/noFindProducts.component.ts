import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-no-find-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './noFindProducts.component.html',
  styleUrl: './noFindProducts.component.scss',
})
export class NoFindProductsComponent {
  route = inject(Router)
  click(){
    this.route.navigate(['home'])
  }
}
