import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './media.component';
import { RecomendedComponent } from './recomended.component';

import { VideoService } from '../Service/video.service';
import { FavoriteComponent } from './favorite.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [MediaComponent,RecomendedComponent,FavoriteComponent],
  imports: [
    CommonModule,HttpClientModule
  ],
  providers:[VideoService],
  exports:[MediaComponent,RecomendedComponent,FavoriteComponent,HttpClientModule]
})
export class MediaModule { }
