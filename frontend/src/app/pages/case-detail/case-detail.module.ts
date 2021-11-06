import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseDetailComponent } from './case-detail/case-detail.component';
import {SharedModule} from "../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";
import { CheckListComponent } from './check-list/check-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CaseDetailComponent, CheckListComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    SharedModule,
    CommonModule,
    RouterModule,
  ],
})
export class CaseDetailModule {}
