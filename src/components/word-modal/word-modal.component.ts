import { Component } from '@angular/core';

import { NavController, NavParams, ViewController, AlertController, Platform } from 'ionic-angular';

import { Entry } from '../../models/entry.model'

import { MTDService } from '../../app/mtd.service'

import { SettingsProvider } from '../../providers/settings/settings';

@Component({
  selector: 'word-modal',
  templateUrl: 'word-modal.component.html'
})


export class WordModal {
  audio = [];
  sentence_audio = [];
  checkedOptions: string[];
  displayImages: boolean = true; //default show images, turns to false on 404
  entry: Entry
  optional: boolean;
  optionalSelection: string[];
  image: string;
  audioExpandHeight: number = 200;
  default_sentence_i: number = 0;
  audio_playing = [];
  speakers;
  sentence_speakers;
  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    public plt: Platform,
    public mtdService: MTDService, ) {

  }

  ngOnInit() {
    this.entry = this.navParams.get('entry');

    try {
      this.image = 'assets/img/' + this.entry.img[0];
    } catch (error) {
      console.log(error)
    }

  }

  stopAllAudio() {
    this.audio_playing.forEach(element => {
      element.pause()
    });
    this.audio_playing = [];
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

  imageError() {
    this.displayImages = false;
  }

}
