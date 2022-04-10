import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

// Setup ads
import { BannerAd } from "@admob-plus/capacitor";

import { HomePage } from "../pages/home/home";

@Component({
  templateUrl: "app.html",
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string; component: any }>;

  banner: any;

  constructor(public platform: Platform, public statusBar: StatusBar) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: "Home", component: HomePage },
      { title: "Capsules", component: "CapsulesPage" },
      { title: "Cores", component: "CoresPage" },
      { title: "Dragons", component: "DragonsPage" },
      { title: "Upcoming Launches", component: "FutureLaunchesPage" },
      { title: "History Events", component: "HistoryPage" },
      { title: "Launchpads", component: "LaunchPadsPage" },
      { title: "Rockets", component: "RocketPage" },
    ];
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleBlackTranslucent();
      await this.initializeAds();
      setTimeout(() => {
        SplashScreen.hide();
      }, 2000);
    });
  }

  async initializeAds() {
    this.banner = new BannerAd({
      // adUnitId: "ca-app-pub-3940256099942544/6300978111",
      adUnitId: "ca-app-pub-4600277827770435/5164251052",
    });
    await this.banner.show();
  }

  async prepareBanner() {}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  async setupBanner() {}
}
