import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopDetailModalPage } from './shop-detail-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ShopDetailModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopDetailModalPageRoutingModule {}
