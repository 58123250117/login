import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the T1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-t1',
  templateUrl: 't1.html',
})
export class T1Page {
  tdee: number;
  bmr: number;
  t1: number=1.2;
  t2: number=1.375;
  t3: number=1.55;
  t4: number=1.7;
  t5: number=1.9;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.bmr = this.navParams.get('t1');

    this.tdee=(this.t1 * this.bmr);
  }

  tdeee(){
    this.navCtrl.push(T1Page, {
      bmr: this.bmr,
      tdee: this.tdee
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad T1Page');
  }

}
