import { Component, OnInit } from '@angular/core';
import { VideoService } from '../Service/video.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: []
})
export class FavoriteComponent  {

  
  Favorites = [];
  
  
//   AddtoFavorite(s){
//     this._service.AddtoFavorite(s);
//  }

 

constructor(private _service:VideoService){
  this.Favorites = _service.getfavorite();
}
  
}
