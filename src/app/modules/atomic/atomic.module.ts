import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './forms/atoms/input/input.component';
import { LabelComponent } from './forms/atoms/label/label.component';

@NgModule({
  declarations: [InputComponent, LabelComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LabelComponent,
    InputComponent,
  ]
})
export class AtomicModule { }
