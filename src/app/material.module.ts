import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule,
  MatStepperModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
 
  MatAutocompleteModule,
  
} from "@angular/material";
import { MatCardModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import { NgOtpInputModule } from  'ng-otp-input';

@NgModule({
  declarations: [],
  imports: [
    
    CommonModule
  ],
  exports: [
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatCardModule,
    MatTabsModule,
    NgOtpInputModule
  ]
})
export class MaterialModule { }
