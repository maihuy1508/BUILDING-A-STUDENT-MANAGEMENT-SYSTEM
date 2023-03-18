import { Injectable } from '@angular/core';
import { HttpClient, HttpClientXsrfModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceGiaovienService {

  constructor(private _http:HttpClient) { }

  // connect frontend to backend

  apiUrl = 'http://localhost:3000/giaovien';

  // get all data giáo viên
  getAllDatagiaovien():Observable<any>
  {
      
      return this._http.get(`${this.apiUrl}`);
  }

  createData(data:any):Observable<any>
  {
       return this._http.post(`${this.apiUrl}`, data);
  }

  //delete data
  deletedData(mgv:any):Observable<any>
  {
      let mgvs = mgv;
      return this._http.delete(`${this.apiUrl}/${mgvs}`);  
  }

  //update data
  updateData(data:any, mgv:any):Observable<any>
  {
      let mgvs = mgv;
      return this._http.put(`${this.apiUrl}/${mgvs}`,data);
  }

  //get single data
  getSingleData(mgv:any):Observable<any>
  {
    let mgvs = mgv;
    return this._http.get(`${this.apiUrl}/${mgvs}`);
  }
}
