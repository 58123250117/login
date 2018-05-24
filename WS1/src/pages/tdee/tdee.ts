import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { T1Page } from '../t1/t1';

/**
 * Generated class for the TdeePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tdee',
  templateUrl: 'tdee.html',
})
export class TdeePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
                                                                                                                                                                                                                 
gototdee(){
  this.navCtrl.push(T1Page);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TdeePage');
  }

}
