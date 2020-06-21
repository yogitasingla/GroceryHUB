import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseClothPageRoutingModule } from './choose-cloth-routing.module';

import { ChooseClothPage } from './choose-cloth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseClothPageRoutingModule
  ],
  declarations: [ChooseClothPage]
})
export class ChooseClothPageModule {}
