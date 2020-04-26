import { Component, OnInit } from '@angular/core';
import {UsanewsService} from '../usanews.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  NewsStoriesUSA:any=[];
  constructor(private usanews: UsanewsService) {}

  ngOnInit(){
    this.usanews.getLatestUSANewsStories().subscribe(
      (data)=>{
        this.NewsStoriesUSA = data.articles;
      }
    )};

}


