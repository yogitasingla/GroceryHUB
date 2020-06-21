import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'choose-cloth', pathMatch: 'full' },
 
  
  { path:'choose', 
    loadChildren: () => import('./choose/choose.module').then( m => m.ChoosePageModule)
  },
  { path:'', 
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  
  { path:'mobile-no', 
    loadChildren: () => import('./mobile-no/mobile-no.module').then( m => m.MobileNoPageModule)
  },
  
  { path:'otp', 
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  
  { path:'show-shop', 
    loadChildren: () => import('./show-shop/show-shop.module').then( m => m.ShowShopPageModule)
  },
  
  { path:'username-p',
    loadChildren: () => import('./username-p/username-p.module').then( m => m.UsernamePPageModule)
  },
  
  { path:'shop/:sid', 
    loadChildren: () => import('./show-shop-d/show-shop-d.module').then( m => m.ShowShopDPageModule)
  },
  
  { path:'shop-detail-modal', 
    loadChildren: () => import('./shop-detail-modal/shop-detail-modal.module').then( m => m.ShopDetailModalPageModule)
  },

  { path:'sign-in', 
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  
  { path:'forgot-p', 
    loadChildren: () => import('./forgot-p/forgot-p.module').then( m => m.ForgotPPageModule)
  },
  
  {
    path: 'address',
    loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
  },
  
  {
    path: 'payment',
    loadChildren: () => import('./payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'choose-cloth',
    loadChildren: () => import('./choose-cloth/choose-cloth.module').then( m => m.ChooseClothPageModule)
  },
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then( m => m.RatePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },



  { path: '**', redirectTo: 'choose', },
  
  
  

  
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
