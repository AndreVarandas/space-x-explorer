import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Cache } from "ionic-cache-observable";
import { CacheService } from "ionic-cache-observable";
import { Observable } from "rxjs/Observable";

import { SpaceXProvider } from "../../providers/space-x/space-x";
import { Launch } from "../../models/Launch";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
})
export class HomePage {
  launches: Launch[];

  constructor(
    public navCtrl: NavController,
    private spaceXProvider: SpaceXProvider,
    private cacheService: CacheService
  ) {}

  ionViewWillEnter() {
    let launchesObservable: Observable<Launch[]> =
      this.spaceXProvider.getLaunches();
    this.cacheService
      .register("home", launchesObservable)
      .mergeMap((cache: Cache<Launch[]>) => cache.get())
      .subscribe(
        (launches) => (this.launches = this.filterLaunchesWithMedia(launches))
      );
  }

  // Kepp all the launches with media, ordered by the most recent
  filterLaunchesWithMedia(launches: Array<Launch>) {
    return launches
      .filter((launch) => launch.links.flickr_images.length > 0)
      .sort((a, b) => b.flight_number - a.flight_number);
  }

  launchTapped(event, launch) {
    this.navCtrl.push("LaunchDetailPage", {
      launch: launch,
    });
  }
}
