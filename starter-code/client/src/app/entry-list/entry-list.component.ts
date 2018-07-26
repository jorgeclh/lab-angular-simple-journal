import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/journal.service';


@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
entries:Array<Object>

  constructor(public journalService:JournalEntries) { }



  ngOnInit() {

    this.journalService.getEntries().subscribe(entries=>this.entries=entries)
  }

}
