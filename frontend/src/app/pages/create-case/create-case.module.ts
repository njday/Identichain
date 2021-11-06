import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatTableModule} from "@angular/material/table";
import {NgxEchartsModule} from "ngx-echarts";
import {TrendModule} from "ngx-trend";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {NgApexchartsModule} from "ng-apexcharts";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared/shared.module";
import {CreateCaseComponent} from "./create-case/create-case.component";
import {MatTabsModule} from "@angular/material/tabs";
import { TabControlsComponent } from './tab-controls/tab-controls.component';
import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { AutomatedCheckComponent } from './automated-check/automated-check.component';
import {MatRadioModule} from "@angular/material/radio";
import { ManualCheckComponent } from './manual-check/manual-check.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { OtherCheckComponent } from './other-check/other-check.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';

@NgModule({
  declarations: [
    CreateCaseComponent,
    TabControlsComponent,
    ApplicantDetailsComponent,
    AutomatedCheckComponent,
    ManualCheckComponent,
    CheckEmailComponent,
    EmailFormComponent,
    OtherCheckComponent,
    SuccessDialogComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    NgxEchartsModule,
    TrendModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    NgApexchartsModule,
    FormsModule,
    SharedModule,
    MatTabsModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  exports: [],
  providers: [],
})
export class CreateCaseModule {}
