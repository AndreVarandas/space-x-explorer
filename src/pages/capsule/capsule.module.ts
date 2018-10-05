import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CapsulePage } from './capsule';

@NgModule({
  declarations: [
    CapsulePage,
  ],
  imports: [
    IonicPageModule.forChild(CapsulePage),
  ],
})
export class CapsulePageModule {}
