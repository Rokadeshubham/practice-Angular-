import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { StudentService } from './studentservice/student.service'
import {FormsModule} from '@angular/forms'
import {FormGroup} from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
 

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
