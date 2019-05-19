import {Injectable} from '@angular/core'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs/internal/observable'
import { Apiinterface } from '../apiinterface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 


  url:string = "http://localhost:57929/api/Student";

  
// /** POST: add a new data to the database */
// addStudent (student): Observable<any> {
//   return this._http.post<any>(this.url, student, {
//     headers:new HttpHeaders({
//       'Content-Type':'application/json'
//     })
//   })
   

//  }


//get
  getInfo():Observable<any>{
    return this._http.get<any>(this.url);
  }
//getByID
  getInformation(id:number):Observable<any>{
    return this._http.get<any>("http://localhost:57929/api/Student/"+id);
  }


//POST
createstudent(apiinterface:Apiinterface):Observable<Apiinterface>{
  let httpHeaders = new HttpHeaders()
  .set('Content-Type','application/json');
  let options ={
    headers:httpHeaders
  };
  return this._http.post<Apiinterface>(this.url,apiinterface,options);
}
//PUT
updatestudent(apiinterface:Apiinterface):Observable<Apiinterface>{
  let httpHeaders = new HttpHeaders()
  .set('Content-Type','application/json');
  let options ={
    headers : httpHeaders
  };
  return this._http.put<Apiinterface>(this.url,apiinterface,options);
}

constructor(private _http:HttpClient) { }
}