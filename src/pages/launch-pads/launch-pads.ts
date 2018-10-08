import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService, Cache } from 'ionic-cache-observable';

import { Launchpad } from '../../models/Launchpad';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the LaunchPadsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch-pads',
  templateUrl: 'launch-pads.html',
})
export class LaunchPadsPage {

  launchpads: Launchpad[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService) { }

  ionViewWillEnter() {

    const launchpadsObservable: Observable<Launchpad[]> = this.spaceXProvider.getLaunchpads();
    this.cacheService.register('launchpads', launchpadsObservable)
      .mergeMap((cache: Cache<Launchpad[]>) => cache.get())
      .subscribe((launchpads) => this.launchpads = launchpads);

  }

}
