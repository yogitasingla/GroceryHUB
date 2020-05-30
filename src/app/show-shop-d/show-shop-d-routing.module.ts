import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowShopDPage } from './show-shop-d.page';

const routes: Routes = [
  {
    path: '',
    component: ShowShopDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowShopDPageRoutingModule {}
