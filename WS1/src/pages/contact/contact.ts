import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {
  constructor(public navCtrl: NavController) {
  }

  logout() {
    this.navCtrl.push(LoginPage); //เอาชื่อเพจมาใส่ //push การเอาใส่
  }


}
