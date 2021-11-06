import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-automated-check',
  templateUrl: './automated-check.component.html',
  styleUrls: ['./automated-check.component.css'],
})
export class AutomatedCheckComponent implements OnInit {
  @Input() checkType: string;
  @Input() checkName: string;
  @Output() selection = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
