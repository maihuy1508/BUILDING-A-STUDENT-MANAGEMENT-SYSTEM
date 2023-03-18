import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceDiemService {

  constructor(private _http:HttpClient) { }

   // connect frontend to backend

   apiUrl = 'http://localhost:3000/diem';

   // get all data diem
   getAllDatadiem():Observable<any>
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
  
   deletedData(mssv:any):Observable<any>
   {
     let mssvs  = mssv;
     return this._http.delete(`${this.apiUrl}/${mssvs}`);
   }
 
   // update data
   updateData(data:any, mssv:any):Observable<any>
   {
     let mssvs = mssv; 
     return this._http.put(`${this.apiUrl}/${mssvs}`,data);
   }
   
 
   //get single data
   getSingleData(mssv:any):Observable<any>
   {
     let mssvs = mssv;
     return this._http.get(`${this.apiUrl}/${mssvs}`);
   }

   

 
}
