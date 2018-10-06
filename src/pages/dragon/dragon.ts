import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Dragon } from '../../models/Dragon';
import { SpaceXProvider } from '../../providers/space-x/space-x';

/**
 * Generated class for the DragonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dragon',
  templateUrl: 'dragon.html',
})
export class DragonPage {

  dragon: Dragon;
  dragonId: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private iab: InAppBrowser,
    private spaceXProvider: SpaceXProvider) {

    this.dragonId = this.navParams.get('dragonId') || null;
    this.dragon = this.navParams.get('dragon') || null;

    if (this.dragonId) {
      this.spaceXProvider.getDragon(this.dragonId)
        .subscribe(dragon => this.dragon = dragon);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DragonPage');
  }

  openWikipedia(url) {
    const options: InAppBrowserOptions = {
      location: 'no',
      zoom: 'no',
      hideurlbar: 'yes',
    };
    const browser = this.iab.create(url, '_self', options);
    browser.show();
  }

}
