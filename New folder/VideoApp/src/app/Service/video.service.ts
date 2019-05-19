import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import {observable} from 'rxjs';
 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
// import { HttpModule } from '@angular/http';


// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { RecomendedComponent } from '../media/recomended.component';



import { Observable } from 'rxjs/internal/Observable'


@Injectable({
  providedIn: 'root'
})
export class VideoService {

  Favorites = [];  
  url:string="./assets/data/VideoInfo.json"
Videos=[];
    // Videos = [
    //   {id:1,name:"Video 1",category:"action",path :"./assets/s1.mp4"},
    //   {id:2,name:"Video 2",category:"action",path :"./assets/s2.mp4"},
    //   {id:3,name:"Video 3",category:"action",path :"./assets/s3.mp4"},
    // ]
  Recommend =[
    {id:1,name:"Video 1",category:"action",path :"./assets/s4.mp4"},
    {id:2,name:"Video 2",category:"action",path :"./assets/s2.mp4"}];
  
  

  getrecommend(){
    return this.Recommend;
  }
  getvideos():Observable<any> {
    // return this._http.get(this.url).map(r=>r.json())
    // return this._http.get(this.url).pipe(map((response: any) => response.json()))
    return this._http.get<any>(this.url);
  }

  getfavorite(){
    return this.Favorites;  
  }
  AddtoFavorite(s){
    this.Favorites.push(s);
 }
  constructor(private _http:HttpClient) { }

} 



