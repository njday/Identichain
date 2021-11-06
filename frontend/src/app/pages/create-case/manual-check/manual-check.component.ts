import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CheckType, ICheckData} from '../../../services/DataService';

@Component({
  selector: 'app-manual-check',
  templateUrl: './manual-check.component.html',
  styleUrls: ['./manual-check.component.css'],
})
export class ManualCheckComponent implements OnInit {
  @Input() checkType: CheckType;
  @Input() checkTitle: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Output() checkState = new EventEmitter();

  checkDetails: ICheckData;
  checkTypes = CheckType;

  showForm = false;
  constructor() {}
  ngOnInit(): void {}
}
