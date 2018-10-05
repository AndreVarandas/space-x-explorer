import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragonPage } from './dragon';

@NgModule({
  declarations: [
    DragonPage,
  ],
  imports: [
    IonicPageModule.forChild(DragonPage),
  ],
})
export class DragonPageModule {}
