import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Rocket } from '../../models/Rocket';
import { HomePage } from '../home/home';
import { SpaceXProvider } from '../../providers/space-x/space-x';

/**
 * Generated class for the RocketDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket-details',
  templateUrl: 'rocket-details.html',
})
export class RocketDetailsPage {

  rocket: Rocket;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private iab: InAppBrowser) {

    this.rocket = this.navParams.get('rocket');

    if (!this.rocket) {
      const rocketId = this.navParams.get('rocketId');

      if (!rocketId) {
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
      }

      this.spaceXProvider.getRocket(rocketId)
        .subscribe((rocket) => this.rocket = rocket);
    }

  }

  openRocketWikipedia(event, url) {
    if (url) {
      const options: InAppBrowserOptions = {
        location: 'no',
        zoom: 'no',
        hideurlbar: 'yes',
      };

      const browser = this.iab.create(url, '_self', options);
      browser.show();
    }
  }

}
