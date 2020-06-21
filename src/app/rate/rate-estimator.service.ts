import { clothDetails } from './rate.model';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RateEstimatorService {
  
  private MenWear: clothDetails[]=[
    {
      clothImg:'',
      clothName:'Suit 2 Pcs',
      price:40.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'Suit 3 pcs',
      price:50.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'Jacket',
      price:30.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'Kameez/kurta',
      price:6.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'pajama',
      price:6.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'Denims/jeans',
      price:8.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'dhoti',
      price:10.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'shirt',
      price:6.00,
      item_qty:0
    },
    {
      clothImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqLUrIVwj7zXQ5_tv1zxkpCLZ_RvHI8HDfWA&usqp=CAU',
      clothName:'t-shirt',
      price:6.00,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'trouser',
      price:6.00,
      item_qty:0
    },
 
];
private WomenWear: clothDetails[]=[
  {
    clothImg:'',
    clothName:'top medium',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'top long ',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'skirt medium',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'skirt long',
    price:8,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'saree plain',
    price:10,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'saree zari',
    price:20,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'salwar',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'kurti',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'jeans',
    price:8,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'dupatta',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'blouse',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'long gown kurti',
    price:15,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'chaniya normal',
    price:10,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'chaniya heavy',
    price:15,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'shirt',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'plazo',
    price:6,
    item_qty:0
  },
  {
    clothImg:'',
    clothName:'shorts',
    price:5,
    item_qty:0
  },
  ]
  private KidsWear: clothDetails[]=[
    {
      clothImg:'',
      clothName:'t-shirt',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'dungarees',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'frock',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'shorts',
      price:4,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'Trouser/jeans',
      price:4,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'baba suit',
      price:4,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'shirt',
      price:4,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'onesize',
      price:4,
      item_qty:0
    },
  ]
  private household: clothDetails[]=[
    {
      clothImg:'',
      clothName:'single bedsheet',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'double bedsheet',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'pillow cover',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'curtain small',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'curtain big',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'curtain extra large',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'sofa cover single',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'sofa cover double',
      price:6,
      item_qty:0
    },
  ]
  private schoolUniform: clothDetails[]=[
    {
      clothImg:'',
      clothName:'school uniform shirt',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'school uniform shorts',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'school uniform full(girls)',
      price:6,
      item_qty:0
    },
    {
      clothImg:'',
      clothName:'school uniform trouser',
      price:6,
      item_qty:0
    },
  ]





  constructor() { }
  MenClothDetails(){
    return[...this.MenWear];
  }
  WomenClothDetails(){
    return[...this.WomenWear];
  }
  KidsClothDetails(){
    return[...this.KidsWear];
  }
 householdDetails(){
    return[...this.household];
  }
  schoolUniformDetails(){
    return[...this.schoolUniform];
  }
}
