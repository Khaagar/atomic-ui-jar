import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomicModule } from '../../../atomic.module';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {

  beforeEach(async(() => {
    /**
     * @uijar InputComponent
     */
    TestBed.configureTestingModule({
      imports: [ AtomicModule, FormsModule, ReactiveFormsModule ],
      declarations: [
        InputTextTestHostComponent,
        InputEmailTestHostComponent,
        InputNumberTestHostComponent,
        InputPasswordTestHostComponent,
        InputDisabledTestHostComponent,
      ]
    })
    .compileComponents();
  }));


  /**
   * @uijarexample Text input
   * @hostcomponent InputTextTestHostComponent
   */
  it('should create simple text input', () => {
    let fixture: ComponentFixture<InputTextTestHostComponent> = TestBed.createComponent(InputTextTestHostComponent);
    let component: InputTextTestHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  /**
   * @uijarexample Email input
   * @hostcomponent InputEmailTestHostComponent
   */
  it('should create simple email input', () => {
    let fixture: ComponentFixture<InputEmailTestHostComponent> = TestBed.createComponent(InputEmailTestHostComponent);
    let component: InputEmailTestHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    /**
     * @uijarexample Number input
     * @hostcomponent InputNumberTestHostComponent
     */
  it('should create simple number input', () => {
    let fixture: ComponentFixture<InputNumberTestHostComponent> = TestBed.createComponent(InputNumberTestHostComponent);
    let component: InputNumberTestHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    /**
     * @uijarexample Password input
     * @hostcomponent InputPasswordTestHostComponent
     */
  it('should create simple password input', () => {
    let fixture: ComponentFixture<InputPasswordTestHostComponent> = TestBed.createComponent(InputPasswordTestHostComponent);
    let component: InputPasswordTestHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

    /**
     * @uijarexample Disabled input state
     * @hostcomponent InputDisabledTestHostComponent
     */
  it('should create simple text input with chackbox to change disabled state', () => {
    let fixture: ComponentFixture<InputDisabledTestHostComponent> = TestBed.createComponent(InputDisabledTestHostComponent);
    let component: InputDisabledTestHostComponent = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: 'input-text-host',
  template: `<div class="example-container">
              <div class="example-body">
                <form [formGroup]="form">
                  <atomic-forms-atom-input
                    type="text"
                    name="control"
                    formControlName="control"
                    [error]="form.get('control').invalid"
                    [touched]="form.get('control').touched"
                  ></atomic-forms-atom-input>
                </form>
              </div>
              </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss']
})
export class InputTextTestHostComponent {
  builder: FormBuilder = new FormBuilder();
  form: FormGroup = this.builder.group({
    control: new FormControl('',[Validators.required]),
  });
}

@Component({
  selector: 'input-email-host',
  template: `<div class="example-container">
              <div class="example-body">
                <form [formGroup]="form">
                  <atomic-forms-atom-input
                    type="email"
                    name="control"
                    formControlName="control"
                    [error]="form.get('control').invalid"
                    [touched]="form.get('control').touched"
                  ></atomic-forms-atom-input>
                </form>
              </div>
              </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss']
})
export class InputEmailTestHostComponent {
  builder: FormBuilder = new FormBuilder();
  form: FormGroup = this.builder.group({
    control: new FormControl('',[Validators.required, Validators.email]),
  });
}

@Component({
  selector: 'input-password-host',
  template: `<div class="example-container">
              <div class="example-body">
                <form [formGroup]="form">
                  <atomic-forms-atom-input
                    type="password"
                    name="control"
                    formControlName="control"
                    [error]="form.get('control').invalid"
                    [touched]="form.get('control').touched"
                  ></atomic-forms-atom-input>
                </form>
              </div>
              </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss']
})
export class InputPasswordTestHostComponent {
  builder: FormBuilder = new FormBuilder();
  form: FormGroup = this.builder.group({
    control: new FormControl('',[Validators.required]),
  });
}

@Component({
  selector: 'input-number-host',
  template: `<div class="example-container">
              <div class="example-body">
                <form [formGroup]="form">
                  <atomic-forms-atom-input
                    type="number"
                    name="control"
                    formControlName="control"
                    [error]="form.get('control').invalid"
                    [touched]="form.get('control').touched"
                  ></atomic-forms-atom-input>
                </form>
              </div>
              </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss']
})
export class InputNumberTestHostComponent {
  builder: FormBuilder = new FormBuilder();
  form: FormGroup = this.builder.group({
    control: new FormControl('',[Validators.required]),
  });
}

@Component({
  selector: 'input-disabled-host',
  template: `<div class="example-container">
              <div
                *ngIf="!disabled"
                class="example-config"
              >
                <input
                  type="checkbox"
                  (click)="toggleDisabled()"
                  [checked]="form.get('control').disabled"
                >Toggle disabled property
              </div>
              <div class="example-body">
                <form [formGroup]="form">
                  <atomic-forms-atom-input
                    type="text"
                    name="control"
                    formControlName="control"
                    [disabled]="form.get('control').disabled"
                  ></atomic-forms-atom-input>
                </form>
              </div>
              </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss']
})
export class InputDisabledTestHostComponent {
  builder: FormBuilder = new FormBuilder();
  form: FormGroup = this.builder.group({
    control: new FormControl('',[Validators.required]),
  });

  toggleDisabled() {
    this.form.get('control').disabled? this.form.get('control').enable() : this.form.get('control').disable();
  }
}
