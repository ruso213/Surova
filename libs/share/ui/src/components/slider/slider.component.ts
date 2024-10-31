/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { Filters } from '@surova/utils';

@Component({
  selector: 'lib-slider',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatSliderModule ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
})
export class SliderComponent {
  sliderOptions = input<Filters>()
  step = input<number>()
  range:number[] = []
  emitRange = output<Filters>()

  onStartThumbChange(evt:any){
    this.range[0]= Number(evt.value)
    const options = this.sliderOptions()
    if(!this.range[1] && options ) this.range[1] = options?.range[1]
    if (options) {
      this.emitRange.emit({
        id:options.id,
        range: this.range,
      })
    }
  }

  onEndThumbChange(evt:any){
    this.range[1]= Number(evt.value) 
    const options = this.sliderOptions()
    if (!this.range[0]) this.range[0] = options?.range[0] as number
    if (options) {
      this.emitRange.emit({
        id:options.id,
        range: this.range,
      })
    } 
  }
}
