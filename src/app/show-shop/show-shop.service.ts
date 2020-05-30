import { Injectable } from '@angular/core';
import { showShop } from './show-shop.model';

@Injectable({
  providedIn: 'root'
})
export class ShowShopService {

 private showShops: showShop[]=[
    {
      id:'s1',
      ShopName:'Iron Shop 1',
      ShopOwnerName:'xyz ',
      ShopAddress:'Sector 2 new delhi ',
      ShopOwnerMobileNo:9999999990,
      imageUrl:'https://images.unsplash.com/photo-1489274495757-95c7c837b101?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      rating:4,
      deliveryTime:1,
      offers:'no Offer available yet'

  },
  {
    id:'s2',
    ShopName:'Iron Shop 2',
    ShopOwnerName:'abc ',
    ShopAddress:'Sector 3, New Delhi ',
    ShopOwnerMobileNo:9999888890,
    imageUrl:'https://st.depositphotos.com/1177973/1372/i/450/depositphotos_13729709-stock-photo-woman-hand-ironing-a-shirt.jpg',
    rating:3.5,
    deliveryTime:1.2,
    offers:'no Offer available yet'

},
{
  id:'s3',
  ShopName:' IronShop 3',
  ShopOwnerName:'abcdxyz ',
  ShopAddress:'Sector 24 New Delhi ',
  ShopOwnerMobileNo:9999999990,
  imageUrl:'https://media-live.jmldirect.com/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/i/r/ironing_genie_02.jpg',
  rating:3.2,
  deliveryTime:1.4,
  offers:'no Offer available yet'

}
];

  constructor() { }
  getAllShops(){
    return[...this.showShops];
  }
  getShop(showShopId:string){
    return {...this.showShops.find(showShop=>{
      return showShop.id === showShopId
    })}
  }
}
