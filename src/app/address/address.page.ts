import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {


  
  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);
  readonly AphoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);

  
  
  public phone_no;first_name;last_name;
  city;
  state;
  add_1;add_2;
  landmark;
  phone_no_A;
  delivery_add;
  
  checked : boolean = false;
  pinCode:number;
  name;
	
  addValuew(): void {
      this.checked = !this.checked;
      console.log("checked: " + this.checked);//it is working !!!
    
  }


  

  constructor(public toastController: ToastController) { }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      color:'warning',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
   
    
  }
  
}
