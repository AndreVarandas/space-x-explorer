import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Core } from '../../models/Core';
import { HomePage } from '../home/home';

/**
 * Generated class for the CorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-core',
  templateUrl: 'core.html',
})
export class CorePage {

  core: Core;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.core = navParams.get('core');
    if (!this.core) {
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }

  }

}
