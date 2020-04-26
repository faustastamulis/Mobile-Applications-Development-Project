import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UKNewsService {

  constructor(private httpClient: HttpClient) { }

  getLatestUKNewsStories(): Observable<any>{
   return this.httpClient.get('http://newsapi.org/v2/top-headlines?country=gb&apiKey=5d8616f48046449f86ae715893ea9b8f');
  }
}

