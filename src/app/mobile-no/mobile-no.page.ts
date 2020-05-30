import { Component, OnInit } from '@angular/core';

import {ErrorStateMatcher} from '@angular/material/core';
import { ToastController } from '@ionic/angular';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-mobile-no',
  templateUrl: './mobile-no.page.html',
  styleUrls: ['./mobile-no.page.scss'],
})
export class MobileNoPage implements OnInit {
    
  readonly phoneFormControl = new FormControl('', [
    Validators.required, Validators.pattern(("[6-9]\\d{9}"))
  ]);

  matcher = new MyErrorStateMatcher();


  public ionite;
  public phone_no;
  constructor(public toastController: ToastController) { }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Otp Send to your Mobile Number',
      color:'warning',
      duration: 2000
    });
    toast.present();
  }
  ngOnInit() {

  }

}
