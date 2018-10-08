import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RocketDetailsPage } from './rocket-details';

@NgModule({
  declarations: [
    RocketDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RocketDetailsPage),
  ],
})
export class RocketDetailsPageModule {}
