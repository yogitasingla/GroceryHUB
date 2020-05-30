import { ShopDetailModalPageModule } from './shop-detail-modal/shop-detail-modal.module';
// import { ShowShopDPage } from './show-shop-d/show-shop-d.page';
// import { ShopDetailModalPage } from './shop-detail-modal/shop-detail-modal.page';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmsRetriever } from '@ionic-native/sms-retriever/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    ShopDetailModalPageModule,
     BrowserAnimationsModule,FormsModule,
    
    ],
    
  providers: [
    StatusBar,
    SplashScreen,
    SmsRetriever,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
