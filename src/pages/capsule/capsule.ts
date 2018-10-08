import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Capsule } from '../../models/Capsule';
import { HomePage } from '../home/home';

/**
 * Generated class for the CapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsule',
  templateUrl: 'capsule.html',
})
export class CapsulePage {

  capsule: Capsule;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.capsule = navParams.get('capsule');

    if (!this.capsule) {
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }

  }

  dragonIdTapped(event, dragonId) {
    this.navCtrl.push('DragonPage', {
      dragonId: dragonId
    })
  }

}

