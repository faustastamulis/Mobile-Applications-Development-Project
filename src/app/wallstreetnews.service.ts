import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class Wallstreetnews {

  constructor(private httpClient: HttpClient) { }

  getLatestWallStreetJournalStories(): Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/everything?domains=wsj.com&apiKey=5d8616f48046449f86ae715893ea9b8f');

   }
 }

