import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MTD } from './app.component';
import { About, Browse, Random, Search} from '../pages'
import { WordModal } from '../components/word-modal/word-modal.component'
import { MTDService } from './mtd.service'
import { ComponentsModule } from '../components/components.module'

@NgModule({
  declarations: [
    MTD,
    About,
    Browse,
    Random,
    Search,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MTD),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MTD,
    About,
    Browse,
    Random,
    Search,
    WordModal
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  },
    MTDService,
    SplashScreen,
    StatusBar,]
})
export class AppModule { }
