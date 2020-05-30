import { ShowShopService } from './show-shop.service';
import { showShop } from './show-shop.model';
import { MenuController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-shop',
  templateUrl: './show-shop.page.html',
  styleUrls: ['./show-shop.page.scss'],
})

export class ShowShopPage implements OnInit {
  showShops:showShop[];
  
  
  constructor(private showShopService:ShowShopService,private menu: MenuController) { }
  

  ngOnInit() {
    this.showShops = this.showShopService.getAllShops();
  }

  isShopAvail(){
    console.log("inside  this func")
  }
}
