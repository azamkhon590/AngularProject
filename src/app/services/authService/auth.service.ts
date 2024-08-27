import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApp } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<UserApp[]>{
    return this.http.get<UserApp[]>('https://localhost:7107/api/User');
  }
  getUser(id:number) : Observable<UserApp>{
    return this.http.get<UserApp>('https://localhost:7107/api/User/'+ id);
  }
  signup(userObj:UserApp):Observable<UserApp>{
    return this.http.post<UserApp>('https://localhost:7107/api/User/register', userObj);
  }
  login(loginObj: UserApp):Observable<UserApp>{
    return this.http.post<UserApp>('https://localhost:7107/api/User/authenticate', loginObj);
  }
}
