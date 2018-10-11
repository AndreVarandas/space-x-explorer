import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, NavParams, ToastController, Toast, LoadingController, Loading, FabContainer } from 'ionic-angular';

import { Launch } from '../../models/Launch';

/**
 * Generated class for the LaunchDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface IWPUtils {
  setImageAsWallpaper: Function,
  setImageAsLockScreen: Function,
  setImageAsWallpaperAndLockScreen: Function
}

declare var WPUtils: IWPUtils;

@IonicPage()
@Component({
  selector: 'page-launch-detail',
  templateUrl: 'launch-detail.html',
})
export class LaunchDetailPage {

  launch: Launch;
  isAndroid: boolean;

  constructor(public navCtrl: NavController,
    private platform: Platform,
    private toastCtrl: ToastController,
    public navParams: NavParams) {

    this.isAndroid = this.platform.is('android') &&
      !this.platform.is('core') &&
      !this.platform.is('mobileweb');

    this.launch = this.navParams.get('launch');
  }

  goToRocketDetail(event, rocketId) {
    this.navCtrl.push('RocketDetailsPage', {
      rocketId: rocketId
    });
  }

  onSuccess() {
    const toast = this.toastCtrl.create({
      duration: 3000,
      message: 'Wallpaper set successfully.',
      position: 'bottom'
    });

    toast.present();
  }

  onError() {
    const toast = this.toastCtrl.create({
      duration: 3000,
      message: 'Wallpaper set successfully.',
      position: 'bottom'
    });

    toast.present();
  }

  setWallpaperImage(event, url, fab: FabContainer): void {
    fab.close();
    WPUtils.setImageAsWallpaper(url, this.onSuccess.bind(this), this.onError);
  }

  setLockScreenImage(event, url, fab: FabContainer): void {
    fab.close();
    WPUtils.setImageAsLockScreen(url, this.onSuccess.bind(this), this.onError);
  }

  setLockScreenAndWallpaperImage(event, url, fab: FabContainer): void {
    fab.close();
    WPUtils.setImageAsWallpaperAndLockScreen(url, this.onSuccess.bind(this), this.onError);
  }

}
