import { Component, OnInit } from '@angular/core';
import {
  CheckType,
  DataService,
  ICaseDetail,
  ICheckData,
  Statuses,
} from '../../../services/DataService';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

@Component({
  selector: 'app-create-case',
  templateUrl: './create-case.component.html',
  styleUrls: ['./create-case.component.css'],
})
export class CreateCaseComponent implements OnInit {
  selectedIndex = 0;
  maxIndex = 5;
  checkTypes = CheckType;

  newCase: ICaseDetail = {
    applicantName: '',
    caseId: '',
    caseOfficer: 'John Smith',
    checks: [],
    dateOfBirth: '',
    email: '',
    firstName: '',
    phoneNumber: '',
    lastName: '',
    notes: '',
    status: Statuses.Pending,
  };
  constructor(
    private dataService: DataService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}
  navigateTabs(forward: boolean) {
    if (forward) {
      this.selectedIndex = Math.min(this.selectedIndex + 1, this.maxIndex);
    } else {
      this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    }
  }

  createCase(newCase: ICaseDetail) {
    const caseToCreate = {
      ...newCase,
      caseId: this.dataService.getNextCaseId(),
    };
    this.dataService.putCase(caseToCreate);
    this.dialog
      .open(SuccessDialogComponent)
      .afterClosed()
      .subscribe(() => {
        this.router.navigate(['/dashboard']);
      });
  }

  handleApplicantDetails(changes: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    notes: string;
  }) {
    this.newCase.firstName = changes.firstName;
    this.newCase.lastName = changes.lastName;
    this.newCase.email = changes.email;
    this.newCase.phoneNumber = changes.phoneNumber;
    this.newCase.notes = changes.notes;
    this.newCase.applicantName = `${changes.firstName} ${changes.lastName}`;
  }

  handleAutomatedSelection(selected: boolean, checkType: CheckType) {
    if (selected) {
      this.newCase.checks.push({
        checkId: checkType,
        status:
          checkType === CheckType.Police ? Statuses.Complete : Statuses.Pending,
        note:
          checkType === CheckType.Police
            ? 'Verification successful'
            : 'Awaiting response from applicant.',
        details: {},
      });
    } else {
      this.newCase.checks = this.newCase.checks.filter(
        (check) => check.checkId !== checkType
      );
    }
  }

  handleOtherSelection(checkName: string) {
    const existing = this.newCase.checks.find(
      (check) => check.checkId === CheckType.Other
    );
    if (existing) {
      existing.note = checkName;
    } else {
      this.newCase.checks.push({
        checkId: CheckType.Other,
        status: Statuses.Pending,
        note: checkName,
        details: {},
      });
    }
  }
  handleManualSelection(details: ICheckData, checkType: CheckType) {
    const existing = this.newCase.checks.find(
      (check) => check.checkId === checkType
    );
    if (existing) {
      existing.details = details;
    } else {
      this.newCase.checks.push({
        checkId: checkType,
        status:
          checkType === CheckType.Academic
            ? Statuses.Complete
            : Statuses.Pending,
        note:
          checkType === CheckType.Academic
            ? 'Verification successful'
            : 'Awaiting response.',
        details,
      });
    }
  }
}
