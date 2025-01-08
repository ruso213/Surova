import { Component, inject, input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import {  MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { InputComponent } from "../input/input.component";
import { MatRipple } from '@angular/material/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'header[Srvheader]',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatIconModule, InputComponent, MatRipple],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  color=input<'light' | 'dark'>('light')
  route=inject(Router)
  quantity=input(0)
  urls=[
    {
      root:'home',
      text:'inicio'
    },
    {
      root:'top-sellest',
      text:'superventas'
    },
    {
      root:'promotions',
      text:'ofertas'
    },
    {
      root:'new-products',
      text:'novedades'
    },
  ]

  navigate(url:string){
    this.route.navigate([url])
  }
}
