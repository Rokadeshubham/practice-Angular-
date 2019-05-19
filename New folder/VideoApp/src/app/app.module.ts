import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MediaModule } from './media/media.module';

import { VideoService } from './Service/video.service';
import { HttpClientModule } from '@angular/common/http';
import {NewAppRouting} from './Routing/app.routing'


@NgModule({
  declarations: [    AppComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MediaModule,HttpClientModule,NewAppRouting
  ],
    providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
