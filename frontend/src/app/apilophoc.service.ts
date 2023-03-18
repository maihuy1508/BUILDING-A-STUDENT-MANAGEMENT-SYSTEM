import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApilophocService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

  apiUrl = 'http://localhost:3000/lop';

  // get all data lop
  getAllDataLop():Observable<any>
  {
      
      return this._http.get(`${this.apiUrl}`);
  }

  // create data
  createData(data:any):Observable<any>
  {
      console.log(data,'createapi=>');

      return this._http.post(`${this.apiUrl}`,data);
  }

 // deleted data
 
  deletedData(ml:any):Observable<any>
  {
    let mls = ml;
    return this._http.delete(`${this.apiUrl}/${mls}`);
  }

  // update data
  updateData(data:any, ml:any):Observable<any>
  {
    let mls = ml; 
    return this._http.put(`${this.apiUrl}/${mls}`,data);
  }
  

  //get single data
  getSingleData(ml:any):Observable<any>
  {
    let mls = ml;
    return this._http.get(`${this.apiUrl}/${mls}`);
  }

}
