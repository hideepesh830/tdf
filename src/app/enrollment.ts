import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Enrollment {
  url='http://localhost:3000/enroll';
  constructor(private _http:HttpClient) { }

  enroll(user: User){
    console.log('Service call ', user);
    return this._http.post<User>(this.url, user)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error:HttpErrorResponse){
    console.log('Error from handler ' + error);
    return throwError(() => new Error(error.message));
  }
}
