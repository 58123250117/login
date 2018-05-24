import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { BmiPage } from '../pages/bmi/bmi';
import { BmrPage } from '../pages/bmr/bmr';
import { TdeePage } from '../pages/tdee/tdee';
import { BmrmanPage } from '../pages/bmrman/bmrman';
import { BmrwomanPage } from '../pages/bmrwoman/bmrwoman';
import { T1Page } from '../pages/t1/t1';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BeverageServiceProvider } from '../../providers/beverage-service/beverage-service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BmiPage,
    BmrPage,
    TdeePage,
    BmrmanPage,
    BmrwomanPage,
    T1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    BmiPage,
    BmrPage,
    TdeePage,
    BmrmanPage,
    BmrwomanPage,
    T1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BeverageServiceProvider
  ]
})
export class AppModule {}
