import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-tab-controls',
  templateUrl: './tab-controls.component.html',
  styleUrls: ['./tab-controls.component.css']
})
export class TabControlsComponent implements OnInit {
  @Input() showBack = false;
  @Input() showForward = true;
  @Output() back = new EventEmitter()
  @Output() forward = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
