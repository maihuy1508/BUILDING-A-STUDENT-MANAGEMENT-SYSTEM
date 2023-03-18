import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdtService {

  constructor(private _http:HttpClient) { }
  
  apiUrlBDT = 'http://localhost:3000/bacdaotao';

  // get all data Bậc đào tạo
  getAllDatadbdt():Observable<any>
  {
      return this._http.get(`${this.apiUrlBDT}`);
  }
}
