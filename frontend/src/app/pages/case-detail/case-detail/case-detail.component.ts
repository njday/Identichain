import { Component, OnInit } from '@angular/core';
import { DataService, ICaseDetail } from '../../../services/DataService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-detail',
  templateUrl: './case-detail.component.html',
  styleUrls: ['./case-detail.component.scss'],
})
export class CaseDetailComponent implements OnInit {
  caseDetail: ICaseDetail;
  checkData: {
    date: string;
    check: string;
    status: string;
    notes: string;
    caseOfficer: string;
  }[];
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((result) => {
      this.caseDetail = this.dataService.getCase(result['caseId']);
      this.checkData = this.caseDetail.checks.map((check) => {
        console.log(check)
        return {
          caseId: this.caseDetail.caseId,
          date: new Date().toDateString(),
          check: check.checkId[0].toLocaleUpperCase() + check.checkId.slice(1),
          status: check.status,
          notes: check.note,
          checkId: check.checkId,
          caseOfficer: 'John Smith',
        };
      });
      console.log(this.checkData)
    });
  }
}
