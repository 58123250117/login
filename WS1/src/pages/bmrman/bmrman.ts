import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmrmanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmrman',
  templateUrl: 'bmrman.html',
})
export class BmrmanPage {
  Weight: number;
  Height: number;
  age: number;
  num1:number=66;
  num2:number=13.7;
  num3:number=5;
  num4:number=6.8;
  bmrman:number;
  tdee1: number;
  tdee2: number;
  tdee3: number;
  tdee4: number;
  tdee5: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Height = this.navParams.get('Height');
    this.Weight = this.navParams.get('Weight');
    this.age = this.navParams.get('age');

    this.bmrman = this.num1 + (this.num2 * this.Weight) + (this.num3 * this.Height) - (this.num4 * this.age);
    this.tdee1=(1.2 * this.bmrman);
    this.tdee2=(1.375 * this.bmrman);
    this.tdee3=(1.55 * this.bmrman);
    this.tdee4=(1.7 * this.bmrman);
    this.tdee5=(1.9 * this.bmrman);
  }
  gotoman(){
    this.navCtrl.push(BmrmanPage, {
      Height: this.Height,
      Weight: this.Weight,
      age: this.age
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrmanPage');
  }

}
