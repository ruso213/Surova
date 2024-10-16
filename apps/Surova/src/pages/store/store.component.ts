import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, HeaderComponent, InputComponent, LetterComponent, letterDirective } from '@surova/ui';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CommonModule, 
    CarouselComponent,
    letterDirective,
    LetterComponent,
    HeaderComponent, 
    InputComponent,
    MatIconModule,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {
  i = [0,1,0,0,0]
}
