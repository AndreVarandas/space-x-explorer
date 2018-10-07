import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService, Cache } from 'ionic-cache-observable';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { Launch } from '../../models/Launch';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FutureLaunchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-future-launches',
  templateUrl: 'future-launches.html',
})
export class FutureLaunchesPage {

  upcomingLaunches: Array<Launch>;
  upcomingLaunch: Launch;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService,
    private iab: InAppBrowser) { }

  ionViewWillEnter() {

    const upcomingLaunchesObservable: Observable<Launch[]> = this.spaceXProvider.getUpcomingLaunches();
    this.cacheService.register('future-launches', upcomingLaunchesObservable)
      .mergeMap((cache: Cache<Launch[]>) => cache.get())
      .subscribe((upcomingLaunches) => {
        this.upcomingLaunch = upcomingLaunches[0];
        this.upcomingLaunches = upcomingLaunches.slice(1, upcomingLaunches.length);
      });

  }

  openRedditCampaign(event, url) {

    const options: InAppBrowserOptions = {
      location: 'no',
      zoom: 'no',
      hideurlbar: 'yes',
    };

    const browser = this.iab.create(url, '_self', options);
    browser.show();

  }
}
