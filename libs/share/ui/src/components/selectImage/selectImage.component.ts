import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-select-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectImage.component.html',
  styleUrl: './selectImage.component.scss',
})
export class SelectImageComponent {
  img = input()
  
}
