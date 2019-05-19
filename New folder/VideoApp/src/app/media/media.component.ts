import { Component } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { VideoService } from '../Service/video.service';
 
import { observable } from 'rxjs';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent  {
Currentvideo = "";
Favorites = [];
Videos=[];
  VideoPlay(Video){
    this.Currentvideo = Video.path;
  }

  AddtoFavorite(s){
    this._service.AddtoFavorite(s);
 }

  constructor(private _service:VideoService){
    _service.getvideos().subscribe(s=>this.Videos=s);
  }
}
