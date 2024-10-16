import { AfterContentInit, Component,ContentChildren,Directive, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';
import { LetterComponent } from '../letter/letter.component';

@Directive({selector:'[libItemCarousel]', standalone: true}) //nombre de uso de la direciva
export class letterDirective{
  
  constructor(public template: TemplateRef<unknown>){} // esto hace referencia a los templates que tengan la directiva de libItemCarousel
}

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule, LetterComponent,MatIconModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterContentInit{
  
  @ContentChildren(letterDirective) letter :QueryList<letterDirective>| undefined; // hace referencia a toda etiqueta que use la directiva


  ngAfterContentInit(): void {
    this.percentage  = this.letter?.length ?? 0
  }
  
  percentage = 0;
  position = 0;
  moveLetter(side:string){
    const slider = document.querySelector<HTMLElement>('.carousel')
    console.log(this.percentage);
    
    if (slider) {
      this.position = side === 'chevronRight'
        ? (this.position < this.percentage - 1 ? this.position + 1 : 0)
        : (this.position === 0 ? this.percentage - 1 : this.position - 1);
    
      
      slider.style.transform = `translateX(-${this.position * 100}%)`;
      slider.style.transition = 'transform 0.5s ease';
      
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
