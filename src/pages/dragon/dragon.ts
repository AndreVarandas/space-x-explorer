import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Dragon } from '../../models/Dragon';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { HomePage } from '../home/home';

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
    private spaceXProvider: SpaceXProvider,
    private loadingCtrl: LoadingController) {

    const loader = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.dragonId = this.navParams.get('dragonId') || null;
    this.dragon = this.navParams.get('dragon') || null;

    if (this.dragonId) {
      loader.present();
      this.spaceXProvider.getDragon(this.dragonId)
        .subscribe(dragon => {
          this.dragon = dragon
          loader.dismiss();
        });
    }

    if (!this.dragon && !this.dragonId) {
      this.navCtrl.setRoot(HomePage);
      this.navCtrl.popToRoot();
    }

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
