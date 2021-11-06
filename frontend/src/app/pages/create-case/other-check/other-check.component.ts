import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-other-check',
  templateUrl: './other-check.component.html',
  styleUrls: ['./other-check.component.css']
})
export class OtherCheckComponent implements OnInit {

  @Output() otherSelection = new EventEmitter()

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
