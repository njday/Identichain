import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailThreadComponent } from './email-thread/email-thread.component';
import {SharedModule} from "../../shared/shared.module";
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [EmailThreadComponent],
  imports: [CommonModule, SharedModule, MatToolbarModule],
})
export class EmailThreadModule {}
