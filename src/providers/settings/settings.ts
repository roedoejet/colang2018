
import { Injectable } from '@angular/core';
import { MTDInfo } from '../../app/global'

import * as _ from 'lodash';

@Injectable()
export class SettingsProvider {
  public optional = { "options": [], "checked": [], "viewing": false };
  constructor() {

    this.init()

  }

  ngOnInit() {
  }

  init() {
    MTDInfo.allEntries.forEach((entry) => {
      Object.keys(entry['optional']).forEach((key) => {
        if (this.optional["options"].indexOf(key) < 0) {
          this.optional["options"].push(key)
          this.optional["checked"].push(key)
        }
      })
    })
  }

  setOptional(optional) {
    this.optional = optional;
  }

}
