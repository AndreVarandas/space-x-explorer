import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Capsule } from '../../models/Capsule';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { CapsulePage } from '../capsule/capsule';

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {

  capsules: Array<Capsule>

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXProvider: SpaceXProvider) {

    this.getCapsules();

  }

  async getCapsules() {
    this.spaceXProvider.getCapsules()
      .subscribe((capsules) => {
        this.capsules = capsules;
        console.log(this.capsules);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulesPage');
  }

  capsuleTapped(event, capsule) {
    this.navCtrl.push(CapsulePage, {
      capsule: capsule
    });
  }

  onSearchBarInput(event) {
    // TODO: Cache the capsules result. Use the cached ones to filter.
    // As the getCapsules is async, the filter is always applied first, and
    // we cant call this.getCapsules() here.

    const value = event.target.value;
    if (value && value.trim() !== '') {
      this.capsules = this.capsules.filter(capsule => {
        return (capsule.capsule_serial.toLocaleLowerCase().indexOf(value.toLocaleLowerCase()) > -1);
      });
    } else {
      this.getCapsules();
    }
  }

}
