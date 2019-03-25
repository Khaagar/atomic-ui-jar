import { Component, OnInit, Input } from '@angular/core';

/**
 * @group Forms
 * @component Atoms => LabelComponent
 */
@Component({
  selector: 'atomic-forms-atom-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  @Input() error = false;
  @Input() disabled = false;
  @Input() focused = false;
  @Input() for = '';
  constructor() { }

  ngOnInit() {
  }

}
