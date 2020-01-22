import { Component } from '@angular/core';
import { SignUp } from '../tab1/login';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [AppService]
})
export class Tab2Page {

  signUpObj: SignUp = new SignUp();

  constructor(public service: AppService, public router: Router, public alertController: AlertController) { }

  btnClick() {
    this.signUpObj.mobile = 'android';
    this.service.SignUp(this.signUpObj).subscribe(data => {
      console.log(data);
      this.showAlert();
      this.router.navigate(['tabs/tab1']);
    })
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'SubTitle',
      message: 'User Registered Successfully',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
