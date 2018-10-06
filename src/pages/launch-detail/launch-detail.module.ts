import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchDetailPage } from './launch-detail';

@NgModule({
  declarations: [
    LaunchDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchDetailPage),
  ],
})
export class LaunchDetailPageModule {}
