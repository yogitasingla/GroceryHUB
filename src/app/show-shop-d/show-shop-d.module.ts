import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowShopDPageRoutingModule } from './show-shop-d-routing.module';

import { ShowShopDPage } from './show-shop-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowShopDPageRoutingModule
  ],
  declarations: [ShowShopDPage]
})
export class ShowShopDPageModule {}
