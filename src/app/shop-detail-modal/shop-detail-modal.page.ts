import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { showShop } from './../show-shop/show-shop.model';
import { ShowShopService } from './../show-shop/show-shop.service';
import { ActivatedRoute,Router } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import { __values } from 'tslib';

@Component({
  selector: 'app-shop-detail-modal',
  templateUrl: './shop-detail-modal.page.html',
  styleUrls: ['./shop-detail-modal.page.scss'],
})
export class ShopDetailModalPage implements OnInit {
  
  loadedShop:showShop
  modal: any;
  condition:boolean;

  constructor(private navParams: NavParams,
    private activatedRoute:ActivatedRoute,
    private router:Router, 
    private showShopService:ShowShopService,
    private modalController:ModalController) {
    
   }
 
  ngOnInit() {

  
       const showId = this.activatedRoute.firstChild.params['_value']['sid']
        this.loadedShop=this.showShopService.getShop(showId);
      //  if(this.loadedShop.rating>=4.0){
      //  this.condition=true;
      //  }
      //  else{
      //   this.condition=false;
      //  }
      
      
  }
 
  
  closemodal(){
    this.modalController.dismiss();
  }

}
