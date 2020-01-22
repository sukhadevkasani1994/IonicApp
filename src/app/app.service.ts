import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment.prod';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login, SignUp } from './tab1/login';

@Injectable()
export class AppService {

  constructor(public http: HttpClient) { }
  loginurl = environment.prod_URL + 'auth/signin';
  signUpurl = environment.prod_URL + 'auth/signup';
  getUsersurl = environment.prod_URL + 'user/user';

  public GetUsers(): Observable<any> {
    return this.http.get(this.getUsersurl + '?' + 'token=' + localStorage.getItem('Token')).pipe(map(res=>res));
  }

  public Login(obj: Login): Observable<any> {
    return this.http.post(this.loginurl, obj);
  }

  public SignUp(obj: SignUp): Observable<any> {
    return this.http.post(this.signUpurl, obj);
  }

  //   public DeleteAgent(agentID): Observable<any> {
  //     return this.http.post(this.deleteurl, agentID);
  //   }
}
