import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { About, Browse, Random, Search } from '../pages'

import { Entry } from '../models/entry.model'

import { MTDInfo } from './global'

import { MTDService } from './mtd.service'


@Component({
  templateUrl: 'app.html'
})
export class MTD {
  @ViewChild(Nav) nav: Nav;
  bookmarks: Entry[];
  rootPage: any = Search;

  pages: Array<{ title: string, component: any }>;


  constructor(public platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, public mtdService: MTDService) {



    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Search', component: Search },
      { title: 'Browse', component: Browse },
      { title: 'Pick a Random Word!', component: Random },
      { title: 'About', component: About }
    ];

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

    });
  }




  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
