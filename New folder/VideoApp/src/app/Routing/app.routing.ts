import {Routes, RouterModule} from '@angular/router'
import { MediaComponent } from '../media/media.component';
import { FavoriteComponent } from '../media/favorite.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


const routes:Routes=[
    { path :"AllVideos",component:MediaComponent },
    {path:"Favorites",component:FavoriteComponent}
]


@NgModule({
    declarations:[],
    imports:[BrowserModule,RouterModule.forRoot(routes)],
    exports:[RouterModule]
})


export class NewAppRouting{}