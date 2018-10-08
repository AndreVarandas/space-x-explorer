import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { CacheService, Cache } from 'ionic-cache-observable';

import { SpaceXProvider } from '../../providers/space-x/space-x';
import { Core } from '../../models/Core';


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
  searchableCores: Array<Core>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService) {

    const coresObservable: Observable<Core[]> = this.spaceXProvider.getCores();
    this.cacheService.register('cores', coresObservable)
      .mergeMap((cache: Cache<Core[]>) => cache.get())
      .subscribe((cores) => {
        this.cores = cores;
        this.searchableCores = this.cores;
      });

  }

  onSearchBarInput(event) {
    this.searchableCores = this.cores;
    const value = event.target.value;

    if (value && value.trim() !== '') {
      this.searchableCores = this.cores.filter(core => {
        return (core.core_serial.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
      });
    }
  }

  coreTapped(event, core) {
    this.navCtrl.push('CorePage', {
      core: core
    });
  }

}
