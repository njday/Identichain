import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DataService, ICaseDetail } from '../../../services/DataService';

@Component({
  selector: 'app-consent-modal',
  templateUrl: './consent-modal.component.html',
  styleUrls: ['./consent-modal.component.css'],
})
export class ConsentModalComponent implements OnInit {
  continue = false;
  caseDetail: ICaseDetail;
  constructor(
    private dialogRef: MatDialogRef<any>,
    private dataService: DataService,
    @Inject(MAT_DIALOG_DATA) public data: ICaseDetail
  ) {
    this.caseDetail = data;
  }

  ngOnInit(): void {}

  confirm(boolean: boolean) {
    if (boolean) {
      this.dataService.putNotification({
        checkId: '',
        caseId: '',
        notificationId: '1',
        message: 'Consent has been received',
      });
      this.dataService.putCase(this.caseDetail, false);
    }
    this.dialogRef.close();
  }
}
