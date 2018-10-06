import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cache } from 'ionic-cache-observable';

import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Launch } from '../../models/Launch';
import { CacheService } from 'ionic-cache-observable';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  launches: Launch[];

  constructor(public navCtrl: NavController,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService) { }

  ionViewWillEnter() {
    let launchesObservable: Observable<Launch[]> = this.spaceXProvider.getLaunches();
    this.cacheService.register('home', launchesObservable)
      .mergeMap((cache: Cache<Launch[]>) => cache.get())
      .subscribe((launches) => this.launches = this.filterLaunchesWithMedia(launches));
  }

  // Kepp all the launches with media
  filterLaunchesWithMedia(launches: Array<Launch>) {
    return launches.filter(launch => launch.links.flickr_images.length > 0);
  }

  launchTapped(event, launch) {
    this.navCtrl.push('LaunchDetailPage', {
      launch: launch
    });
  }

}
