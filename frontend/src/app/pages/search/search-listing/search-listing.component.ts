import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CheckType,
  ICaseDetail,
  Statuses,
} from '../../../services/DataService';

const caseData: ICaseDetail[] = [
  {
    applicantName: 'Dwayne Johnson',
    caseId: 'CASE-1',
    caseOfficer: 'John Smith',
    checks: [
      {
        checkId: CheckType.RightToWork,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Police,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Employment,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Academic,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Other,
        details: {
          notes: 'COVID-19 Vax Status',
        },
        note: 'Verification successful',
        status: Statuses.Complete,
      },
    ],
    dateOfBirth: '',
    email: '',
    firstName: '',
    phoneNumber: '',
    lastName: '',
    notes: 'Request consent to view',
    status: Statuses.Complete,
  },
  {
    applicantName: 'Steve Thompson',
    caseId: 'CASE-2',
    caseOfficer: 'John Smith',
    checks: [
      {
        checkId: CheckType.RightToWork,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Police,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Employment,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Academic,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Other,
        details: {
          notes: 'COVID-19 Vax Status',
        },
        note: 'Verification successful',
        status: Statuses.Complete,
      },
    ],
    dateOfBirth: '',
    email: 'stevethompson@gmail.com',
    firstName: '',
    phoneNumber: '123456789',
    lastName: '',
    notes: 'Request consent to view',
    status: Statuses.Complete,
  },
  {
    applicantName: 'Steven Seagal',
    caseId: 'CASE-3',
    caseOfficer: 'John Smith',
    checks: [
      {
        checkId: CheckType.RightToWork,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Police,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Employment,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Academic,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Other,
        details: {
          notes: 'COVID-19 Vax Status',
        },
        note: 'Verification successful',
        status: Statuses.Complete,
      },
    ],
    dateOfBirth: '',
    email: 'johnwayne@gmail.com',
    firstName: '',
    phoneNumber: '123456789',
    lastName: '',
    notes: 'Request consent to view',
    status: Statuses.Complete,
  },
  {
    applicantName: 'John Wayne',
    caseId: 'CASE-4',
    caseOfficer: 'John Smith',
    checks: [
      {
        checkId: CheckType.RightToWork,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Police,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Employment,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Academic,
        details: {},
        note: 'Verification successful',
        status: Statuses.Complete,
      },
      {
        checkId: CheckType.Other,
        details: {
          notes: 'COVID-19 Vax Status',
        },
        note: 'Verification successful',
        status: Statuses.Complete,
      },
    ],
    dateOfBirth: '',
    email: 'johnwayne@gmail.com',
    firstName: '',
    phoneNumber: '123456789',
    lastName: '',
    notes: 'Request consent to view',
    status: Statuses.Complete,
  },
];
@Component({
  selector: 'app-search-listing',
  templateUrl: './search-listing.component.html',
  styleUrls: ['./search-listing.component.css'],
})
export class SearchListingComponent implements OnInit {
  caseData = caseData;
  filteredData = caseData;
  form = new FormGroup({
    searchTerm: new FormControl(''),
  });

  constructor() {
    this.form.valueChanges.subscribe(() => {
      const formValue = this.form.value;
      if (!formValue.searchTerm) {
        this.filteredData = caseData;
        return;
      }
      this.filteredData = this.caseData.filter((caseDetail) => {
        const nameMatch = formValue.searchTerm
          ? caseDetail.applicantName.includes(formValue.searchTerm)
          : false;
        const emailMatch = formValue.searchTerm
          ? caseDetail.email.includes(formValue.searchTerm)
          : false;
        const phoneMatch = formValue.searchTerm
          ? caseDetail.phoneNumber.includes(formValue.searchTerm)
          : false;
        return nameMatch || emailMatch || phoneMatch;
      });
    });
  }

  ngOnInit(): void {}
}
