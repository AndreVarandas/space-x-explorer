import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RocketPage } from './rocket';

@NgModule({
  declarations: [
    RocketPage,
  ],
  imports: [
    IonicPageModule.forChild(RocketPage),
  ],
})
export class RocketPageModule {}
