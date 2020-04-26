import { Component, OnInit } from '@angular/core';
import {Wallstreetnews} from '../wallstreetnews.service'
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  NewsStoriesWallStreet:any=[];
  constructor(private wallstreetnews: Wallstreetnews) { }

  ngOnInit(){
    this.wallstreetnews.getLatestWallStreetJournalStories().subscribe(
      (data)=>{
        this.NewsStoriesWallStreet = data.articles;
      }
    )};

}