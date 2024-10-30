/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, EventEmitter, forwardRef, input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-custom-checkbox',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule, MatIconModule],
  templateUrl: './customCheckbox.component.html',
  styleUrl: './customCheckbox.component.scss',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR, 
      useExisting:forwardRef(()=>CustomCheckboxComponent), 
      multi:true
    }
  ]
})
export class CustomCheckboxComponent implements ControlValueAccessor{
  option = input();
  control = new FormControl();
  @Output() clickInput = new EventEmitter<string>()
  private onChange : (value: string) => void=()=>{return};
  
  private onTouched : ()=>void=()=>{return};
  writeValue(obj: any): void {
    this.control.setValue(obj)
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
    
  }
  setDisabledState?(isDisabled: boolean): void {
    throw isDisabled
  }
  toggleCheckbox(value:any): void {
    this.onChange(value);  
    this.onTouched();          
    
    this.clickInput.emit(value)
    
  }
}
