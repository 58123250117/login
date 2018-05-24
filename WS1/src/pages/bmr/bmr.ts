import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BmrmanPage } from '../bmrman/bmrman';
import { BmrwomanPage } from '../bmrwoman/bmrwoman';

/**
 * Generated class for the BmrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmr',
  templateUrl: 'bmr.html',
})
export class BmrPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrPage');
  }
  bmrman() {
    this.navCtrl.push(BmrmanPage);
  }

  bmrwoman() {
    this.navCtrl.push(BmrwomanPage);
  }


}
