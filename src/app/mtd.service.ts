import { Injectable } from "@angular/core";
import { MTDInfo } from './global'
import { Entry } from '../models/entry.model'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as _ from 'lodash';

@Injectable()
export class MTDService {
    categories: Object = {};
    constructor() {
        if (MTDInfo.allAudioEntries.length > 0) {
            this.categories["audio"] = MTDInfo.allAudioEntries;
        }
        for (let key of MTDInfo.dataKeys) {
            this.categories[key] = MTDInfo.dataDict[key].data
        }
        let semantic_categories = _.uniq(MTDInfo.allEntries.map((entry) => {
            if (entry["theme"]) {
                entry.theme[0].toLowerCase()
            }
        }
        )).sort()
        for (let cat of semantic_categories) {
            if (cat != null) {
                this.categories[cat] = MTDInfo.allEntries.filter((entry) => {
                    if (entry["theme"]) { entry.theme[0] === cat }
                })
            }
        }
    }

}