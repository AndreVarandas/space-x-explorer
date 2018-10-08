import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CacheService, Cache } from 'ionic-cache-observable';

import { Capsule } from '../../models/Capsule';
import { SpaceXProvider } from '../../providers/space-x/space-x';

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {

  capsules: Array<Capsule>;
  searchableCapsules: Array<Capsule>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService) {

    const capsulesObservable: Observable<Capsule[]> = this.spaceXProvider.getCapsules();
    this.cacheService.register('capsules', capsulesObservable)
      .mergeMap((cache: Cache<Capsule[]>) => cache.get())
      .subscribe((capsules) => {
        this.capsules = capsules;
        this.searchableCapsules = this.capsules;
      });

  }

  capsuleTapped(event, capsule) {
    this.navCtrl.push('CapsulePage', {
      capsule: capsule
    });
  }

  onSearchBarInput(event) {

    this.searchableCapsules = this.capsules;
    const value = event.target.value;

    if (value && value.trim() !== '') {
      this.searchableCapsules = this.capsules.filter(capsule => {
        return (capsule.capsule_serial.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
      });
    }
  }

}
