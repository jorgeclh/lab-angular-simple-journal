import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'
import {environment} from '../environments/environment';





@Injectable()
export class JournalEntries {




  constructor(private http:Http){}

  getEntries() {

    return this.http.get(`${environment.BASE_URL}/api/journal-entries`)
    .map((res)=>res.json());
  }

  getEntryById(id:string){

    return this.http.get(`${environment.BASE_URL}/api/journal-entries/${id}`)
    .map((res)=>res.json());
  }
}
