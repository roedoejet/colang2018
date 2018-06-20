import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { EntryList } from '../../components/entry-list/entry-list.component';

import { Entry } from '../../models/entry.model';

import { MTDInfo } from '../../app/global';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class Search {
  entries: Entry[] = MTDInfo.allEntries;
  matches: Entry[];
  partMatches: Entry[];
  maybeMatches: Entry[];
  searchQuery: string = '';

  constructor(public navCtrl: NavController) {
  }

  getEnglish() {
    var results = []
    var re = new RegExp(this.searchQuery, 'i')
    for (let entry of this.entries) {
      console.log(entry.definition)
      if (re.test(entry.definition)) {
        results.push(entry)
      }
    }
    let sorted_answers = results.sort(function (a, b) {
      return a["definition"].length - b["definition"].length;
    });
    return (sorted_answers.slice(0, 9))
  };

  // Get English and target results
  getResults() {
    if (this.searchQuery.length > 1) {
      let english = this.getEnglish();
      let target = window["searchGit"](this.searchQuery)
      let matches = [];
      let partMatches = [];
      let maybeMatches = [];
      var populateEng = function () {
        for (let result of english) {
          var entry = result
          entry.type = "eng";
          matches.push(entry);
        }
      }

      var populateTarget = function () {
        for (let result of target) {
          var entry = result[1]
          if (entry.distance === 0) {
            entry.type = "git";
            matches.push(entry);
          }

          if (entry.distance <= 1 && entry.distance > 0) {
            entry.type = "git";
            partMatches.push(entry);
          }

          if (entry.distance <= 2 && entry.distance > 1) {
            entry.type = "git";
            maybeMatches.push(entry);
          }
        }
      }
      
      populateEng();
      populateTarget();
      this.matches = matches;
      this.partMatches = partMatches;
      this.maybeMatches = maybeMatches;
    }
  };

}
