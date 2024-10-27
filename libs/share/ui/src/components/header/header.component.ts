import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import {  MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule,ButtonComponent, InputComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
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
