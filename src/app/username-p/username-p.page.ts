import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-p',
  templateUrl: './username-p.page.html',
  styleUrls: ['./username-p.page.scss'],
})
export class UsernamePPage implements OnInit {

  constructor() { }
  userName;
  confirmP;
  password;
  ngOnInit() {
  }

}
