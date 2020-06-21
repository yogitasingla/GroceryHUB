import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import * as firebase from "firebase";

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
  
    recaptchaVerifier;
     confirmationResult:firebase.auth.ConfirmationResult;
     otpSent=false;
    otp;
   
  constructor(public toastController: ToastController,
    private af : AngularFireAuth
    ) { }

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
      ngAfterOnInit(){
        this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',
        {
            size: "invisible",
            callback: function (response) {
            }
        }); // inserting element to the firebas
      
      }
      sendOTP(phone_no:number){
    
        console.log('phone',this.phone_no);
         firebase.auth().signInWithPhoneNumber( this.phone_no, this.recaptchaVerifier)
         .then((result)=>{
   
   
           console.log('result',result);
          
           this.otpSent=true;
           console.log(this.phone_no);
           this.confirmationResult= result;
           alert('OTP sent');
          // console.log('otp',this.otp);
   
         }).catch(err =>{
           alert(err);
         })
   
       }
   

  
      


}