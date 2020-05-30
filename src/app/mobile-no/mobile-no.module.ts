import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { IonicModule } from '@ionic/angular';
import {  ReactiveFormsModule } from "@angular/forms";
import { MobileNoPageRoutingModule } from './mobile-no-routing.module';

import { MobileNoPage } from './mobile-no.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    MobileNoPageRoutingModule,
    MaterialModule,
  ],
  declarations: [MobileNoPage]
})
export class MobileNoPageModule {}
