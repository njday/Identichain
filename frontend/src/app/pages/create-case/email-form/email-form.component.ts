import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CheckType } from '../../../services/DataService';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent implements OnInit, OnChanges {
  @Output() formState = new EventEmitter();
  @Input() checkType: CheckType;
  @Input() firstName: string;
  @Input() lastName: string;
  checkTypes = CheckType;
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    institute: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
    major: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),

    tenure: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    employer: new FormControl('', [Validators.required]),

    contactEmail: new FormControl('', [Validators.required]),
    contactName: new FormControl('', [Validators.required]),
  });
  constructor() {}
  ngOnChanges(changes: SimpleChanges) {
    const { firstName, lastName } = changes;
    if (firstName.currentValue) {
      this.form.controls['firstName'].setValue(firstName.currentValue);
    }
    if (lastName.currentValue) {
      this.form.controls['lastName'].setValue(lastName.currentValue);
    }
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.formState.emit(this.form.value);
    });
  }
}
