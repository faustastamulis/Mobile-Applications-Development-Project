import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  NewsStories:any=[];

  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.newsService.getLatestNewsStories().subscribe(
      (data)=>{
        this.NewsStories = data.articles;
      }
    );

  }
  
}
