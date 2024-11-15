import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import {  MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[Srvheader]',
  standalone: true,
  imports: [CommonModule,ButtonComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  color:'light' | 'dark'='light'
  route=inject(Router)
  urls=[
    {
      root:'home',
      text:'inicio'
    },
    {
      root:'top-sellest',
      text:'Lo mas vendido'
    },
    {
      root:'promotions',
      text:'Promociones'
    },
    {
      root:'new-products',
      text:'Nuevos productos'
    },
  ]

  navigate(url:string){
    this.route.navigate([url])
  }
}
