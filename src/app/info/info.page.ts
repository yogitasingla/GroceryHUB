import { Router, RouterEvent } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

pages=[
  {
    title:'Home',
    url:'/info/show-shop'
  },
  {
    title:'shop-details',
    url:'/info/shop/:sid'
  },
  {
    title:'otp',
    url:'/info/otp'
  }
];
selectedPath='';

  constructor(private menu: MenuController,
    private router:Router,
      ) {
                
      this.router.events.subscribe((event:RouterEvent)=>{
        this.selectedPath=event.url;
      })
     }
  
  ngOnInit() {
  }

}
