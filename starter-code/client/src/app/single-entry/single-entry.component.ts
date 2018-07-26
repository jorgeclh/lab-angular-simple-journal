import { Component, OnInit } from '@angular/core';
import { JournalEntries } from '../../services/journal.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {

entry:Object;
  constructor(public journalService:JournalEntries, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params=>
    this.journalService.getEntryById(params.id).subscribe(entry=>this.entry=entry))

  }

}
