import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Launch } from '../../models/Launch';

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})
export class LaunchDetailPage {

  launch: Launch;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

    this.launch = this.navParams.get('launch');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchDetailPage');
  }

}
