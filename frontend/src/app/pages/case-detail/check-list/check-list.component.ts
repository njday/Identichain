import { Component, Input, OnInit } from '@angular/core';
import { DataService, Statuses } from '../../../services/DataService';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss'],
})
export class CheckListComponent implements OnInit {
  @Input() checkData: any;
  public displayedColumns: string[] = [
    'date',
    'check',
    'caseOfficer',
    'notes',
    'status',
    'view',
  ];
  constructor(private dataSerivce: DataService) {}
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
  markAsComplete(caseId: string, checkId: string) {
    console.log(checkId)
    const existingCheck = this.dataSerivce.getCheck(caseId, checkId);
    const row = this.checkData.find(check=>check.check === checkId)
    row.status = Statuses.Complete;
    row.notes = "Verification successful";

    this.dataSerivce.putCheck(caseId, {
      ...existingCheck,
      status: Statuses.Complete,
      note: "Verification successful"
    });
  }
  ngOnInit(): void {}
}
