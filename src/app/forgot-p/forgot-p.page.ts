import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-forgot-p',
  templateUrl: './forgot-p.page.html',
  styleUrls: ['./forgot-p.page.scss'],
})
export class ForgotPPage implements OnInit {

  constructor(public toastController: ToastController) { }
  NPassword;
  CPassword;
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Password Chnged Sucessfully',
      color:'warning',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {
  }

}
