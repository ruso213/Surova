import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent, LetterComponent } from '@surova/ui';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, CarouselComponent, LetterComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss',
})
export class StoreComponent {}
