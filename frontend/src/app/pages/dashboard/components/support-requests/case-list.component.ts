import { Component, Input } from '@angular/core';
import {DataService, ICaseDetail, ICheck} from '../../../../services/DataService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConsentModalComponent } from 'src/app/pages/search/consent-modal/consent-modal.component';

@Component({
  selector: 'app-case-list',
  templateUrl: './case-list.component.html',
  styleUrls: ['./case-list.component.scss'],
})
export class CaseListComponent {
  @Input() caseData: ICaseDetail[];
  @Input() hideTitle = false;
  @Input() requestConsent = false;
  public displayedColumns: string[] = [
    'caseId',
    'caseOfficer',
    'applicantName',
    'notes',
    'status',
    'view',
  ];

  getColumnHeader(string: string) {
    switch (string) {
      case 'caseId':
        return 'Case ID';
      case 'caseOfficer':
        return 'Case Officer';
      case 'applicantName':
        return 'Applicant Name';
      default:
        return string;
    }
  }
  constructor(private router: Router, private dialog: MatDialog) {}

  viewCase(row: ICaseDetail) {
    if (!this.requestConsent) {
      this.router.navigate(['/case/detail'], {
        queryParams: {
          caseId: row.caseId,
        },
      });
    } else {
      this.dialog.open(ConsentModalComponent, { data: row });
    }
  }
}
