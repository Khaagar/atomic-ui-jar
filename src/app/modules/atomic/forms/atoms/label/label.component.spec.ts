import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AtomicModule } from '../../../atomic.module';
import { Component } from '@angular/core';

describe('LabelComponent', () => {
  let component: LabelTestHostComponent;
  let fixture: ComponentFixture<LabelTestHostComponent>;

  beforeEach(async(() => {
    /**
     * @uijar LabelComponent
     * @hostcomponent LabelTestHostComponent
     */
    TestBed.configureTestingModule({
      imports: [ AtomicModule ],
      declarations: [ LabelTestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabelTestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /** @uijarexample Default label */

  it('should create component with default state', () => {
    component.label = 'Default';
    expect(component.label).toEqual('Default');
  });

  /** @uijarexample Error label */
  it('should create component with error state', () => {
    component.label = 'Error';
    component.error = true;
    expect(component.label).toEqual('Error');
    expect(component.error).toBeTruthy();
    expect(component.disabled).toBeFalsy();
  });

  /** @uijarexample Disabled label */
  it('should create component with disabled state', () => {
    component.label = 'Disabled';
    component.disabled = true;
    expect(component.label).toEqual('Disabled');
    expect(component.error).toBeFalsy();
    expect(component.disabled).toBeTruthy();
  });
});

@Component({
  selector: 'label-test-host',
  template: `<div class="example-container">
                  <div
                    *ngIf="!disabled"
                    class="example-config"
                  >
                    <input
                      type="checkbox"
                      (click)="toggleFocus()"
                      [checked]="focused"
                    >Toggle focused property
                  </div>
                  <div class="example-body">
                    <atomic-forms-atom-label
                      [focused]="focused"
                      [error]="error"
                      [disabled]="disabled"
                    >{{label}}</atomic-forms-atom-label>
                  </div>
                </div>`,
  styleUrls: ['../../../../../../assets/css-helpers/host-components.scss'],
})
export class LabelTestHostComponent {
  label: string;
  error: boolean;
  disabled: boolean;
  focused = false;
  toggleFocus() {
    this.focused = !this.focused;
  }
}
