import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { Users } from '../../models/users';
import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login_type = "login"; //กำหนดค่าใส่ =
  login_form : any;
  register_form : any;
  password_max_length : 6;
  user = {} as Users;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private formBuilder : FormBuilder, ) {
  this.login_form = this.formBuilder.group({
    email: ['' , [Validators.email, Validators.required]],
    password: ['' , [Validators.minLength(this.password_max_length),Validators.required]],
          });

  this.register_form = this.formBuilder.group({
            email: ['' , [Validators.email, Validators.required]],
            password: ['' , [Validators.minLength(this.password_max_length),Validators.required]],
            phone: ['' , [Validators.required]]
                  });
  }
  login(user: Users) {
    console.log(user.email); //ดูข้อมูล
    this.navCtrl.push(TabsPage); //เอาชื่อเพจมาใส่ //push การเอาใส่
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
