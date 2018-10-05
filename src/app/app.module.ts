import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage'
import { CacheModule } from 'ionic-cache-observable'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CapsulesPage } from '../pages/capsules/capsules';
import { CapsulePage } from '../pages/capsule/capsule';
import { CoresPage } from '../pages/cores/cores';
import { CorePage } from '../pages/core/core';
import { DragonsPage } from '../pages/dragons/dragons';
import { DragonPage } from '../pages/dragon/dragon';
import { LaunchDetailPage } from '../pages/launch-detail/launch-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpaceXProvider } from '../providers/space-x/space-x';
import { HttpModule } from '@angular/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CapsulesPage,
    CapsulePage,
    CoresPage,
    CorePage,
    DragonsPage,
    DragonPage,
    LaunchDetailPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    CacheModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CapsulesPage,
    CapsulePage,
    CoresPage,
    CorePage,
    DragonsPage,
    DragonPage,
    LaunchDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpaceXProvider,
    InAppBrowser,
  ]
})
export class AppModule {}
