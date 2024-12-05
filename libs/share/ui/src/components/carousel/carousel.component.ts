import {  Component,ContentChildren,Directive, ElementRef, HostListener, input, QueryList, TemplateRef, viewChild} from '@angular/core';
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
export class CarouselComponent {
  
  @ContentChildren(letterDirective) letter :QueryList<letterDirective>| undefined; // hace referencia a toda etiqueta que use la directiva

  move = input<boolean>(false)
  showPosition = input<boolean>(true)
  position = 0;
  touchedRow= false

  caroselRef = viewChild<ElementRef>("carousel")
  carouselItemRef = viewChild<ElementRef>("carouselItem")

 



  @HostListener("window:resize", ["$event"])
  onResize(event: unknown) {
    console.log("resize", event,this.caroselRef()?.nativeElement?.offsetWidth)
    const positions = this.carouselItemRef()?.nativeElement?.scrollWidth/ this.carouselItemRef()?.nativeElement.offsetWidth
    

    
  }

  clickRow(side:string){
    this.moveLetter(side as 'chevronLeft' | "chevronRight")
    this.touchedRow = true
  }

  moveLetter(side:string){
    const viewableContent= this.carouselItemRef()?.nativeElement.offsetWidth
    const fullContent = this.carouselItemRef()?.nativeElement?.scrollWidth
    const totalSwitchs = JSON.parse(fullContent)/JSON.parse(viewableContent)
    console.log(totalSwitchs);
    
    if (this.carouselItemRef()?.nativeElement && this.letter) {
      switch(side){
        case 'chevronRight':
          if(this.position < totalSwitchs - 1){
            this.position++
          }else{
            this.position = 0
          }
          break;
        case 'chevronLeft':
          if(this.position > 0){
            this.position = this.position - 1
          }else{
            this.position = totalSwitchs -1 
          }
          break;
      }      
    }
  }

  moveTo(index: number){  
    console.log(index);
    this.position = index
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
