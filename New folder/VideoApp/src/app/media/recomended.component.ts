import { Component, OnInit } from '@angular/core';
import { VideoService } from '../Service/video.service';

@Component({
  selector: 'app-recomended',
  templateUrl: './recomended.component.html',
  styleUrls: []
})
export class RecomendedComponent {
  Favorites = [];
  Currentvideo = "";
  RecommendVideo =[];
 
    
    VideoPlay(Video){
      this.Currentvideo = Video.path;
    }
  
    AddtoFavorite(s){
      this._service.AddtoFavorite(s);
   }
  
   
    
  constructor(private _service:VideoService){
    this.RecommendVideo = _service.getrecommend();
  }


  
}
