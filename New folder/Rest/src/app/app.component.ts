import { Component } from '@angular/core';
import { StudentService } from './studentservice/student.service'
import { Apiinterface } from './apiinterface';
import {HttpClient} from '@angular/common/http'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'restdemo';
  Students =[];
  SingleStudentInfo;
  studentdata=[];
  //post
  datasaved:true;
  studentForm:FormGroup;
  allstudent:Observable<Apiinterface[]>;
  //post

  
  url:string = "http://localhost:57929/api/Student";
  
  constructor(private formbuilder:FormBuilder, private _service:StudentService){
      _service.getInfo().subscribe(s=>this.Students=s);
      
  }
  GetInfoById(id){
    this._service.getInformation(id).subscribe(s=>this.SingleStudentInfo=s);
  }
  //post
  ngOnInit(){
    this.studentForm = this.formbuilder.group({
      Id:['',[Validators.required]],
      Name:['',[Validators.required]],
      Gender:['',[Validators.required]],
      Subjects:['',[Validators.required]]
    })
  }
  
  onFormSubmit(){
    // this.datasaved = false;
    let apiinterface = this.studentForm.value;
    this.create(apiinterface);
    this.update(apiinterface);
    this.studentForm.reset();
  }
  create(apiinterface:Apiinterface){
    this._service.createstudent(apiinterface).subscribe(
      apiinterface=>{ this.datasaved = true;})
  }
update(apiinterface:Apiinterface){
  this._service.updatestudent(apiinterface).subscribe(
    apiinterface=>{this.datasaved=true;}
  )
}

}
