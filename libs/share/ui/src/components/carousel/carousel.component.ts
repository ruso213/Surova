import { Component,Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { LetterComponent } from '../letter/letter.component';

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule, LetterComponent,MatIconModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit{
  ngOnInit(): void {
    this.percentage= 1 *this.letters.length;
  }
  @Input() letters: number[]= [];
  percentage = 0;
  position = 0;
  moveLetter(side:string){
    const slider = document.querySelector<HTMLElement>('.carousel')
    if (slider) {
      this.position = side === 'chevronRight'
        ? (this.position < this.percentage - 1 ? this.position + 1 : 0)
        : (this.position === 0 ? this.percentage - 1 : this.position - 1);
    
      
      slider.style.transform = `translateX(-${this.position * 100}%)`;
      slider.style.transition = 'transform 0.5s ease';
      console.log(this.position);
      
    }
    
  }
  moveTo(index: number){  
    const slider = document.querySelector<HTMLElement>('.carousel')
    if (slider){
      slider.style.transform = `translateX(-${index * 100}%)`;
      slider.style.transition = 'transform 0.5s ease';
      this.position = index
    }
  }
}
