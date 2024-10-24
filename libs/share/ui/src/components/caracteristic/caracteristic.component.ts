/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, forwardRef, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { Filters } from '@surova/utils';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-caracteristic',
  standalone: true,
  imports: [CommonModule,MatIconModule,ReactiveFormsModule],
  templateUrl: './caracteristic.component.html',
  styleUrl: './caracteristic.component.scss',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=> CaracteristicComponent),
      multi:true
    }
  ]
})
export class CaracteristicComponent implements ControlValueAccessor{
  
  caracteristics = input<Filters[]>()
  control = new FormControl();
  private onChanges!: (str: string)=>void;
  private onTouched !: ()=>void
  writeValue(obj: any): void {
    this.control.setValue(obj)
  }
  registerOnChange(fn: any): void {
    this.onChanges = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
    
  }
  setDisabledState?(isDisabled: boolean): void {
    throw isDisabled
  }
  toggleCheckbox(value:string): void {
    this.onChanges(value);  // Notifica el cambio de valor
    this.onTouched();               // Marca el control como "tocado"
  }
}
