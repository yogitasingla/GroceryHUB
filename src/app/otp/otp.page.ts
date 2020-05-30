import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
   hash:any;
  constructor(public toastController: ToastController) { }
  // genhash(){
  //   this.smsRetriever.getAppHash()
  // .then((res: any) =>{
  //  console.log(res);
  // alert(res);
  // this.hash=res;
  // })
  // .catch((error: any) => console.error(error));
  // }


  // retriveSMS(){
  //   console.log('watching sms');
  //   this.smsRetriever.startWatching()
  // .then((res: any) => 
  // {
  //   console.log(res);
  //   const otp= res.Message.toString().substr(4,6);
  //   alert(`OTP Received -${otp}`);
  // })
  // .catch((error: any) => console.error(error));
  // }
  
back="back";
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
