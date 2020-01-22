import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Login } from './login';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [AppService]
})
export class Tab1Page {

  loginObj: Login = new Login();

  constructor(public service: AppService, public router : Router, public alertController: AlertController) { }

  btnClick() {
    this.service.Login(this.loginObj).subscribe(data => {
      localStorage.setItem('UserName', data.userName);
      localStorage.setItem('Token', data.token);
      localStorage.setItem('Expiry', data.expiry);
      this.showAlert();
      this.router.navigate(['tabs/tab3']);
    })
  }

  async showAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'SubTitle',
      message: 'User Logined Successfully',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

}
