import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from '../input/input.component';
import {  MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule,ButtonComponent, InputComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
