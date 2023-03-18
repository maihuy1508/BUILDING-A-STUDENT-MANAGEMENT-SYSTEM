import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceKhoaService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

  apiUrl = 'http://localhost:3000/khoa';

  // get all data Khoa
  getAllDataKhoa():Observable<any>
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
 
  deletedData(mk:any):Observable<any>
  {
    let mks = mk;
    return this._http.delete(`${this.apiUrl}/${mks}`);
  }

  // update data
  updateData(data:any, mk:any):Observable<any>
  {
    let mks = mk; 
    return this._http.put(`${this.apiUrl}/${mks}`,data);
  }
  

  //get single data
  getSingleData(mk:any):Observable<any>
  {
    let mks = mk;
    return this._http.get(`${this.apiUrl}/${mks}`);
  }

}

