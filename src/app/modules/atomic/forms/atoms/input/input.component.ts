import { Component, forwardRef, Input, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

/**
 * @group Forms
 * @component Atoms => InputComponent
 */

@Component({
  selector: `
    atomic-forms-atom-input[type="text"],
    atomic-forms-atom-input[type="password"],
    atomic-forms-atom-input[type="number"],
    atomic-forms-atom-input[type="email"]`,
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {       provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true
    }
    ]
})
export class InputComponent implements ControlValueAccessor, OnInit {

  @Input('type') inputType: string;
  @Input() placeholder = 'Type here...';
  @Input() name: string;
  @Input() error: boolean;
  @Input() disabled: boolean;
  @Input() touched: boolean;

  inputValue: string;

  constructor() { }

  ngOnInit() {
  }

  propagateChange = (_: any) => { };
  onTouched = () => { };

  writeValue(obj: any) {
    if (obj !== undefined) {
      this.inputValue = obj;
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}

export type InputTypes = 'text' | 'number' | 'password' | 'email';
