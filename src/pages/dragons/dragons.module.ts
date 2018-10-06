import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DragonsPage } from './dragons';

@NgModule({
  declarations: [
    DragonsPage,
  ],
  imports: [
    IonicPageModule.forChild(DragonsPage),
  ],
})
export class DragonsPageModule {}
