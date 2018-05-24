import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BmiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bmi',
  templateUrl: 'bmi.html',

})
export class BmiPage {
  Height: number;
  Weight: number;
  bmi: number;
  bmidetail: String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.Height = this.navParams.get('Height');
    this.Weight = this.navParams.get('Weight');
    this.bmi = this.Weight / ((this.Height/100)*(this.Height/100));

    this.bmidetailcal(this.bmi);
  }


  bmidetailcal(bmi){
    if (bmi >= 30)
    this.bmidetail= "อ้วนมาก / โรคอ้วนระดับ3 / อันตรายระดับ3";
    else if(bmi >= 29.9)
    this.bmidetail="อ้วน / โรคอ้วนระดับ2 / อันตรายระดับ2";
    else if(bmi >= 24.9)
    this.bmidetail="ท้วม / โรคอ้วนระดับ1 / อันตรายระดับ1";
    else if(bmi >= 22.9)
    this.bmidetail="ปกติ / สุขภาพดี / เท่าคนปกติ";
    else if(bmi <= 18.5)
    this.bmidetail="น้ำหนักน้อย / ผอม / มากกว่าคนปกติ";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BmiresultPage');
  }

  gotToResult(){
    this.navCtrl.push(BmiPage, {
      Height: this.Height,
      Weight: this.Weight
    });
  }
}
