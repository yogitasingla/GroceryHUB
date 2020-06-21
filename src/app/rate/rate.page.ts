import { IonicModule } from '@ionic/angular';
import { RateEstimatorService } from './rate-estimator.service';
import { Component, OnInit } from '@angular/core';
import { clothDetails } from './rate.model';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.page.html',
  styleUrls: ['./rate.page.scss'],
})
export class RatePage implements OnInit {
  item_qty:any;
  clothesWear:any;
  MenWear: clothDetails[];
  WomenWear: clothDetails[];
  kidsWear:clothDetails[];
  household:clothDetails[];
  schoolUniform:clothDetails[];
   rs:any;

  constructor(private RateEstimatorService:RateEstimatorService
    ) {
      this.item_qty=0; 
      this.rs=0;
    }

    onLoadClothes(eventType){
   
      if(eventType=='men'){
       console.log("inside this function");
       this.clothesWear= this.RateEstimatorService.MenClothDetails();
      }else if(eventType=='women'){
        console.log("inwomen blog");
       this.clothesWear=this.RateEstimatorService.WomenClothDetails();
       console.log('women',this.clothesWear);
      }
   }
 

    //decrement cart
    decrementCart(){
      if(this.item_qty-1 < 1){
        this.item_qty = 0;
        console.log('item_1->' + this.item_qty)
      }
      else{
        this.item_qty -= 1;
        console.log('item_2->' + this.item_qty);
      }
    }

    // Men's Wear 
inc(i:number){
  this.MenWear[i].item_qty += 1;
  this.rs=this.rs+this.MenWear[i].price;
  this.item_qty=  this.item_qty += 1;
  console.log(this.MenWear[i].item_qty + 1);
  }
  dec(i:number){
    if(this.MenWear[i].item_qty-1 < 0){
      this.MenWear[i].item_qty = 0;
      
      this.rs=this.rs;
      console.log('item_1->' + this.MenWear[i].item_qty)
    }
    else{
      this.MenWear[i].item_qty -= 1;
      this.rs=this.rs-this.MenWear[i].price;
      
     
      console.log('item_2->' + this.MenWear[i].item_qty);
    }
    }
    //Women's Wear

    incW(i:number){
      this.WomenWear[i].item_qty += 1;
      this.rs=this.rs+this.WomenWear[i].price;
      this.item_qty=  this.item_qty += 1;
      console.log(this.WomenWear[i].item_qty + 1);
      }
      decW(i:number){
        if(this.WomenWear[i].item_qty-1 < 0){
          this.WomenWear[i].item_qty = 0;
          this.rs=this.rs;
          console.log('item_1->' + this.WomenWear[i].item_qty)
        }
      
        else{
          this.WomenWear[i].item_qty -= 1;
          this.rs=this.rs-this.WomenWear[i].price;
          console.log('item_2->' + this.WomenWear[i].item_qty);
        }
        }
        //kids wear
        incK(i:number){
          this.kidsWear[i].item_qty += 1;
          this.rs=this.rs+this.kidsWear[i].price;
          this.item_qty=  this.item_qty += 1;
          console.log(this.kidsWear[i].item_qty + 1);
          }
          decK(i:number){
            if(this.kidsWear[i].item_qty-1 < 0){
              this.kidsWear[i].item_qty = 0;
              this.rs=this.rs;
              console.log('item_1->' + this.kidsWear[i].item_qty)
            }
            else{
              this.kidsWear[i].item_qty -= 1;
              this.rs=this.rs-this.kidsWear[i].price;
              console.log('item_2->' + this.kidsWear[i].item_qty);
            }
            }

 
        //household
        incH(i:number){
          this.household[i].item_qty += 1;
          this.rs=this.rs+this.household[i].price;
          this.item_qty=  this.item_qty += 1;
          console.log(this.household[i].item_qty + 1);
          }
          decH(i:number){
            if(this.household[i].item_qty-1 < 0){
              this.household[i].item_qty = 0;
              this.rs=this.rs;
              console.log('item_1->' + this.household[i].item_qty)
            }
            else{
              this.household[i].item_qty -= 1;
              this.rs=this.rs-this.household[i].price;
              console.log('item_2->' + this.household[i].item_qty);
            }
            }

        //school uniform
        incS(i:number){
          this.schoolUniform[i].item_qty += 1;
          this.rs=this.rs+this.schoolUniform[i].price;
          this.item_qty=  this.item_qty += 1;
          console.log(this.schoolUniform[i].item_qty + 1);
          }
          decS(i:number){
            if(this.schoolUniform[i].item_qty-1 < 0){
              this.schoolUniform[i].item_qty = 0;
              this.rs=this.rs;
              console.log('item_1->' + this.schoolUniform[i].item_qty)
            }
            else{
              this.schoolUniform[i].item_qty -= 1;
              this.rs=this.rs-this.household[i].price;
              console.log('item_2->' + this.schoolUniform[i].item_qty);
            }
            }

        //others


    

  ngOnInit() {
    
    // this.clothesWear= this.RateEstimatorService.MenClothDetails();
     console.log(this.clothesWear);
    /// this.WomenWear=this.RateEstimatorService.WomenClothDetails();
     this.kidsWear=this.RateEstimatorService.KidsClothDetails();
     console.log(this.kidsWear);
    // this.schoolUniform=this.RateEstimatorService.schoolUniformDetails();
  //   this.household=this.RateEstimatorService.householdDetails();
  }

 
}
