import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Capsule } from '../../models/Capsule';
import { DragonPage } from '../dragon/dragon';

/**
 * Generated class for the CapsulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-capsule',
  templateUrl: 'capsule.html',
})
export class CapsulePage {

  capsule: Capsule;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.capsule = navParams.get('capsule');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulePage');
  }

  dragonIdTapped(event, dragonId) {
    this.navCtrl.push(DragonPage, {
      dragonId: dragonId
    })
  }

}
