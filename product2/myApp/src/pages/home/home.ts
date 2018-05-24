import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatePage } from '../date/date';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotodata(){
    this.navCtrl.push(DatePage);
  }

}
