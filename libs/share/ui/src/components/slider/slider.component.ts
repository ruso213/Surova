/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { FiltersSlider } from '@surova/utils';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-slider',
  standalone: true,
  imports: [CommonModule,MatIconModule,MatSliderModule ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    useExisting: forwardRef(()=>SliderComponent ),
    multi:true
  }]
})
export class SliderComponent implements ControlValueAccessor{
 
  sliderOptions = input<FiltersSlider>()
  step = input<number>()
  value:number[]=[]

  onChange !: (i :number[])=> void
  onTouched !: ()=> void

  writeValue(obj: number[]): void {
    this.value =obj
    if(obj[0] == undefined) {
      console.log(obj);
      this.value = [...this.sliderOptions()!.range]
    }
  }

  registerOnChange(fn: any): void {    
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  onStartThumbChange(evt:any){
    this.value[0]=Number(evt.value)
    this.onChange(this.value)
  }
  
  onEndThumbChange(evt:any){
    this.value[1]= Number(evt.value)
    this.onChange(this.value)
  }
}
