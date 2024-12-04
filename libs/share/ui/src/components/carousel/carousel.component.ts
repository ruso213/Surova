import { AfterContentInit, Component,ContentChildren,Directive, input, QueryList, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule} from '@angular/material/icon';

@Directive({selector:'[libItemCarousel]', standalone: true}) //nombre de uso de la direciva
export class letterDirective{
  
  constructor(public template: TemplateRef<unknown>){} // esto hace referencia a los templates que tengan la directiva de libItemCarousel
}

@Component({
  selector: 'lib-carousel',
  standalone: true,
  imports: [CommonModule,MatIconModule ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements AfterContentInit{
  
  @ContentChildren(letterDirective) letter :QueryList<letterDirective>| undefined; // hace referencia a toda etiqueta que use la directiva


  ngAfterContentInit(): void {
    const slider = document.querySelector<HTMLElement>('.carousel')
    console.log(slider!.scrollWidth);
    this.percentage  = this.letter?.length ?? 0
    console.log(this.percentage);
    
    this.contantlyMove()
  }
  move = input<boolean>(false)
  percentage = 0;
  position = 0;
  touchedRow= false
  clickRow(side:string){
    this.moveLetter(side as 'chevronLeft' | "chevronRight")
    this.touchedRow = true
  }

  moveLetter(side:string){
    const slider = document.querySelector<HTMLElement>('.carousel')
    const firstChild = slider?.firstChild as HTMLElement
    const width = firstChild.offsetWidth

    
    if (slider && this.letter) {
      switch(side){
        case 'chevronRight':
          if(this.position < this.letter.length -1){
            this.position++
          }else{
            this.position = 0
          }
          break;
        case 'chevronLeft':
          if(this.position > 0){
            this.position = this.position - 1
          }else{
            this.position = this.letter.length -1
          }
          break;
      }      
      this.percentage = this.percentage + this.position
      slider.style.transform = `translateX(-${this.position* width}px)`;
      console.log(width);
      
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

  contantlyMove(){
    console.log(this.move());
    
    if (this.move()) {
      this.moveLetter('chevronRight')
      setTimeout(()=>{
        this.contantlyMove()
        this.touchedRow = false
      },10000)
    }
  }
}
