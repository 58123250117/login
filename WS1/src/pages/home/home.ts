import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BeverageServiceProvider } from '../../../providers/beverage-service/beverage-service';
import { Beverage } from '../../models/beverage';
import { Subscription} from 'rxjs/Subscription';
import { BmiPage } from '../bmi/bmi';
import { BmrPage } from '../bmr/bmr';
import { TdeePage } from '../tdee/tdee';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beveragesList: Beverage[];
  subscription: Subscription;
  

  constructor(public navCtrl: NavController,
    //public beverageService : BeverageServiceProvider) {
    private BeverageServiceProvider: BeverageServiceProvider){
  }

  bmi() {
    this.navCtrl.push(BmiPage); //เอาชื่อเพจมาใส่ //push การเอาใส่
  }

  bmr() {
    this.navCtrl.push(BmrPage); //เอาชื่อเพจมาใส่ //push การเอาใส่
  }

  tdee() {
    this.navCtrl.push(TdeePage); //เอาชื่อเพจมาใส่ //push การเอาใส่
  }


private getData(){
    this.subscription = this.BeverageServiceProvider.getAllData().subscribe(
      (beveragesList:Beverage[]) => this.beveragesList = beveragesList
    );
  }

  ionViewWillEnter(){ //เมื่อเอนเทอร์เรียกมาทำงาน
    this.getData();
  }

  ionViewWillLeave(){ //คืนค่า
    this.subscription.unsubscribe();
  }
  
}
