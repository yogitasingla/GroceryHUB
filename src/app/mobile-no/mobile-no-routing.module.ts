import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileNoPage } from './mobile-no.page';

const routes: Routes = [
  {
    path: '',
    component: MobileNoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileNoPageRoutingModule {}
