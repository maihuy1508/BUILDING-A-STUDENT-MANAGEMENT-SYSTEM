import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MalopService {

  constructor(private _http:HttpClient ) { }

  apiUrlLophoc = 'http://localhost:3000/lop';

  // get all data lop
    getAllDatadlop():Observable<any>
    {
        return this._http.get(`${this.apiUrlLophoc}`);
    }

}
