import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[{provide:NG_VALUE_ACCESSOR, useExisting:forwardRef(()=> InputComponent), multi:true}]
})
export class InputComponent implements ControlValueAccessor {
  @Input()shadow= false 
  @Input() inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'tel' | 'url' = 'text';
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
}
