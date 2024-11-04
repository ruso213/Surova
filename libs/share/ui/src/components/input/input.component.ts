/* eslint-disable @typescript-eslint/no-explicit-any */
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
  providers:[ {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true,
  },]
})
export class InputComponent implements ControlValueAccessor {
  @Input()shadow= false 
  @Input() inputType: 'text' | 'number' | 'email' | 'password' | 'date' | 'time' | 'tel' | 'url' = 'text';
  value = ''
  
  private onChange ?: (value: string ) => void;
  private onTouched?: () => void;
  
  writeValue(value: string): void {
    this.value = value

  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  changeValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange?.(this.value);
    
  }
}
