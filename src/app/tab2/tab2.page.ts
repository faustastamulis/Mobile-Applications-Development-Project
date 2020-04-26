import { Component, OnInit } from '@angular/core';
import { UKNewsService } from '../uknews.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
NewsStoriesUK:any=[];
  constructor(private uknews: UKNewsService) {}

  ngOnInit(){
    this.uknews.getLatestUKNewsStories().subscribe(
      (data)=>{
        this.NewsStoriesUK = data.articles;
      }
    )};

}
