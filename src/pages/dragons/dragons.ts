import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dragon } from '../../models/Dragon';
import { SpaceXProvider } from '../../providers/space-x/space-x';
import { DragonPage } from '../dragon/dragon';

/**
 * Generated class for the DragonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-dragons',
  templateUrl: 'dragons.html',
})
export class DragonsPage {

  dragons: Array<Dragon>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private spaceXSProvider: SpaceXProvider) {

    this.spaceXSProvider.getDragons()
      .subscribe(dragons => this.dragons = dragons);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DragonsPage');
  }

  dragonTapped(event, dragon) {
    this.navCtrl.push(DragonPage, {
      dragon: dragon
    })
  }

}
