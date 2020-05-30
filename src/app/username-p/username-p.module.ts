import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsernamePPageRoutingModule } from './username-p-routing.module';

import { UsernamePPage } from './username-p.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsernamePPageRoutingModule
  ],
  declarations: [UsernamePPage]
})
export class UsernamePPageModule {}
