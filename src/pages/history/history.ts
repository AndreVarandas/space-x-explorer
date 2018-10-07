import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService, Cache } from 'ionic-cache-observable';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

import { SpaceXProvider } from '../../providers/space-x/space-x';
import { HistoryEvent } from '../../models/HistoryEvent';
import { Observable } from 'rxjs/Observable';


/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {

  histories: Array<HistoryEvent>

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService,
    private iab: InAppBrowser) { }

  ionViewWillEnter() {

    const historyEventsObservable: Observable<HistoryEvent[]> = this.spaceXProvider.getHistoryEvents();
    this.cacheService.register('history-events', historyEventsObservable)
      .mergeMap((cache: Cache<HistoryEvent[]>) => cache.get())
      .subscribe((historyEvents) => this.histories = historyEvents);

  }

  openArticle(event, url) {

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
