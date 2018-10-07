import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FutureLaunchesPage } from './future-launches';

@NgModule({
  declarations: [
    FutureLaunchesPage,
  ],
  imports: [
    IonicPageModule.forChild(FutureLaunchesPage),
  ],
})
export class FutureLaunchesPageModule {}
