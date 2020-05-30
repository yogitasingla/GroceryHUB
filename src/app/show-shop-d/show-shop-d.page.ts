import { ShopDetailModalPage } from './../shop-detail-modal/shop-detail-modal.page';
import { showShop } from './../show-shop/show-shop.model';
import { ShowShopService } from './../show-shop/show-shop.service';
import { ModalController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-show-shop-d',
  templateUrl: './show-shop-d.page.html',
  styleUrls: ['./show-shop-d.page.scss'],
})
export class ShowShopDPage implements OnInit {
  showShops:showShop[];
  loadedShop:showShop
  modal: any;

  constructor(private activatedRoute:ActivatedRoute, 
    private showShopService:ShowShopService,
    public modalController: ModalController,
    private nav: NavController) { }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe(paramsId=>{
    console.log(paramsId['sid'])
     
      const showId = paramsId['sid'];
      this.loadedShop=this.showShopService.getShop(showId)
    });
  }


  
  async openModal() {
    const modal = await this.modalController.create({
      component: ShopDetailModalPage,
      componentProps: {
        
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
   }
}

