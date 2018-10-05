import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Core } from '../../models/Core';
import { CorePage } from '../core/core';

/**
 * Generated class for the CoresPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cores',
  templateUrl: 'cores.html',
})
export class CoresPage {

  cores: Array<Core>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXProvider: SpaceXProvider) {

    this.spaceXProvider.getCores()
      .subscribe((cores) => this.cores = cores);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoresPage');
  }

  coreTapped(event, core) {
    this.navCtrl.push(CorePage, {
      core: core
    });
  }

}
