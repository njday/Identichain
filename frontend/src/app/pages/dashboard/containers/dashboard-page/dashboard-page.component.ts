import { Component } from '@angular/core';
import {
  DataService,
  ICaseDetail,
} from '../../../../services/DataService';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent {
  public caseData: ICaseDetail[];

  constructor(private dataService: DataService) {
    this.caseData = this.dataService.datastore.cases;
  }
}
