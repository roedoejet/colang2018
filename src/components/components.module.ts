import { NgModule } from '@angular/core';
import { EntryList } from './entry-list/entry-list.component';
import { WordModal } from './word-modal/word-modal.component';
import { IonicModule } from 'ionic-angular'
@NgModule({
	declarations: [EntryList, WordModal],
	imports: [IonicModule],
	exports: [EntryList, WordModal]
})
export class ComponentsModule {}
