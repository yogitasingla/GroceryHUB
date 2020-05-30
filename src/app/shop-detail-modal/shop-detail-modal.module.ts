import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopDetailModalPageRoutingModule } from './shop-detail-modal-routing.module';

import { ShopDetailModalPage } from './shop-detail-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopDetailModalPageRoutingModule
  ],
  declarations: [ShopDetailModalPage]
})
export class ShopDetailModalPageModule {}
