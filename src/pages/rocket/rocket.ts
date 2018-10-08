import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CacheService, Cache } from 'ionic-cache-observable';

import { Rocket } from '../../models/Rocket';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RocketPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rocket',
  templateUrl: 'rocket.html',
})
export class RocketPage {

  rockets: Rocket[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService) { }

  ionViewWillEnter() {

    const rocketsObservable: Observable<Rocket[]> = this.spaceXProvider.getRockets();
    this.cacheService.register('rockets', rocketsObservable)
      .mergeMap((cache: Cache<Rocket[]>) => cache.get())
      .subscribe((rockets) => this.rockets = rockets);

  }

  onRocketTap(event, rocket) {
    this.navCtrl.push('RocketDetailsPage', {
      rocket: rocket
    });
  }

}
