import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BmrmanPage } from './bmrman';

@NgModule({
  declarations: [
    BmrmanPage,
  ],
  imports: [
    IonicPageModule.forChild(BmrmanPage),
  ],
})
export class BmrmanPageModule {}
