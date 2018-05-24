import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmrwomanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmrwoman',
  templateUrl: 'bmrwoman.html',
})
export class BmrwomanPage {
  Weight: number;
  Height: number;
  age: number;
  num1:number=665;
  num2:number=9.6;
  num3:number=1.8;
  num4:number=4.7;
  bmrwoman:number;
  tdee1: number;
  tdee2: number;
  tdee3: number;
  tdee4: number;
  tdee5: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Height = this.navParams.get('Height');
    this.Weight = this.navParams.get('Weight');
    this.age = this.navParams.get('age');

    this.bmrwoman = this.num1 + (this.num2 * this.Weight) + (this.num3 * this.Height) - (this.num4 * this.age);
    this.tdee1=(1.2 * this.bmrwoman);
    this.tdee2=(1.375 * this.bmrwoman);
    this.tdee3=(1.55 * this.bmrwoman);
    this.tdee4=(1.7 * this.bmrwoman);
    this.tdee5=(1.9 * this.bmrwoman);
  }


  gotowoman(){
    this.navCtrl.push(BmrwomanPage, {
      Height: this.Height,
      Weight: this.Weight,
      age: this.age
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BmrwomanPage');
  }

}
