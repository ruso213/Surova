import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRipple } from '@angular/material/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'button[Srvbttn]',
  standalone: true,
  imports: [CommonModule, MatRipple],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  typeBttn = input<'shadow' | 'stroke' | 'none' | 'filled' | 'buy'>()
}
