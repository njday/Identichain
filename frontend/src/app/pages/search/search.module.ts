import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchListingComponent } from './search-listing/search-listing.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '../../shared/shared.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ConsentModalComponent } from './consent-modal/consent-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [SearchListingComponent, ConsentModalComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SharedModule,
    DashboardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [ConsentModalComponent],
})
export class SearchModule {}
