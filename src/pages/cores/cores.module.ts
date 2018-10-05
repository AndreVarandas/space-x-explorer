import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CoresPage } from './cores';

@NgModule({
  declarations: [
    CoresPage,
  ],
  imports: [
    IonicPageModule.forChild(CoresPage),
  ],
})
export class CoresPageModule {}
