import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseClothPage } from './choose-cloth.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseClothPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseClothPageRoutingModule {}
