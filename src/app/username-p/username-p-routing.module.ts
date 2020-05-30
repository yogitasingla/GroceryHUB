import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsernamePPage } from './username-p.page';

const routes: Routes = [
  {
    path: '',
    component: UsernamePPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsernamePPageRoutingModule {}
