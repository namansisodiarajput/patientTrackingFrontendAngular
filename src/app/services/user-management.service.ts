import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http: HttpClient) { }

  registerUser(userRegistrationDetail) {
    console.log(userRegistrationDetail);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.post('http://127.0.0.1:8000/api/register', userRegistrationDetail, httpOptions);
  }

  saveUserPosition(userRegistrationDetail,userId) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.put('http://127.0.0.1:8000/api/users/'+userId, userRegistrationDetail, httpOptions);
  }


  listUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json;charset=utf-8'
      })
    };

    // tslint:disable-next-line:max-line-length
    return this.http.get('http://127.0.0.1:8000/api/users/list', httpOptions);
  }

}
