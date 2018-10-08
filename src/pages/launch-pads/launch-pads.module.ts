import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchPadsPage } from './launch-pads';

@NgModule({
  declarations: [
    LaunchPadsPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchPadsPage),
  ],
})
export class LaunchPadsPageModule {}
