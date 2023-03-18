import { ErrorHandlerService } from './error-handler.service';
import { User } from './../components/models/User';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
   private url = "http://localhost:3000/auth/signup"; 

   isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
   userId!: Pick<User, 'id'>;

   httpOptions: {headers: HttpHeaders} = {
     headers: new HttpHeaders({ "Content-Type": "application/json"}),
   };

  

  constructor(
    private http: HttpClient, 
    private errorHandlerService: ErrorHandlerService, 
    private router: Router
    
    ) { }

  signup(user: Omit<User, "id">): Observable<User> {
      return this.http
      .post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup"))
      );
  }

     account(
    email: Pick<User, "email">,
    password: Pick<User, "password">
  ): Observable<{
    token: string;
    userId: Pick<User, "id">;
  }> {
    return this.http
      .post(`${this.url}/account`, { email, password }, this.httpOptions)
      .pipe(
        first(),
        tap((tokenObject:any) => {
          this.userId = tokenObject.userId;
          localStorage.setItem("token", tokenObject.token);
          this.isUserLoggedIn$.next(true);
          this.router.navigate(["posts"]);
        }),
        catchError(
          this.errorHandlerService.handleError<{
            token: string;
            userId: Pick<User, "id">;
          }>("account")
        )
      );
  }   
}


