import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css'],
})
export class ApplicantDetailsComponent implements OnInit {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    notes: new FormControl('', [Validators.required]),
  });

  @Output() formState = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      this.formState.emit(this.form.value);
    });
  }
}
