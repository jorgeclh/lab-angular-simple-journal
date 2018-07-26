import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { JournalEntries } from '../services/journal.service';
import { SingleEntryComponent } from './single-entry/single-entry.component';
import { EntryListComponent } from './entry-list/entry-list.component'
import { RouterModule } from '@angular/router'
import { routes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    SingleEntryComponent,
    EntryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalEntries],
  bootstrap: [AppComponent]
})
export class AppModule { }
