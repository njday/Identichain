import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-dropzone',
  templateUrl: './file-dropzone.component.html',
  styleUrls: ['./file-dropzone.component.scss']
})
export class FileDropzoneComponent implements OnInit {
  files: File[] = [];

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
