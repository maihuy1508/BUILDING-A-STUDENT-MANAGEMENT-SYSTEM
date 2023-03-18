import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceMonhocService {

  constructor(private _http:HttpClient) { }

  // Connect to backend

  apiUrl = 'http://localhost:3000/monhoc'

  // Get all data

  getAllData():Observable<any>
  {
      return this._http.get(`${this.apiUrl}`);
  }

 // Create Data
  createData(data:any):Observable<any>
  {
      return this._http.post(`${this.apiUrl}`,data)
  }

  // delete Data
  deleteData(mamh:any):Observable<any>
  {   
      let mamhs = mamh;
      return this._http.delete(`${this.apiUrl}/${mamhs}`);
  }

  // update data
  updateData(data:any, mamh:any):Observable<any>
  {
      let mamhs = mamh;
      return this._http.put(`${this.apiUrl}/${mamhs}`,data);
  }

  // get single data
  getSingleData(mamh:any):Observable<any>
  {
    let mamhs = mamh;
    return this._http.get(`${this.apiUrl}/${mamhs}`);
  }
}

