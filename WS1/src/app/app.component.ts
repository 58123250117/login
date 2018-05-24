import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BmiPage } from '../pages/bmi/bmi';
import { BmrPage } from '../pages/bmr/bmr';
import { HomePage } from '../pages/home/home';
import { TdeePage } from '../pages/tdee/tdee';
import { BmrmanPage } from '../pages/bmrman/bmrman';
import { BmrwomanPage } from '../pages/bmrwoman/bmrwoman';
import { T1Page } from '../pages/t1/t1';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
