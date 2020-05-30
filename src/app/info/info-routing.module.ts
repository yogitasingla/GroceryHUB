import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoPage } from './info.page';

const routes: Routes = [
  {
    path: 'info',
    component: InfoPage,
    children:[
     
//     {
//       path:'show-shop',
//       loadChildren:'../show-shop/show-shop.module#ShowShopPageModule'

//   },
//   { path:'shop/:sid', 
//   loadChildren: () => import('../show-shop-d/show-shop-d.module').then( m => m.ShowShopDPageModule)
// },

 
    {
      path:'otp',
        loadChildren:'../otp/otp.module#OtpPageModule'
     }
  ]
  },
  // {
  //   path:'',
  //   redirectTo:'/info/address'

  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoPageRoutingModule {}
