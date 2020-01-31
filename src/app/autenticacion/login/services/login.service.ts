import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from '../models';
import {Observable} from 'rxjs';
import {environment as env} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class LoginService {
  private readonly PATH: string = 'auth';

  constructor(private http: HttpClient) { }

  lugar(login: Login): Observable<any> {
    return this.http.post(env.baseUrl + this.PATH, login);
  }
}
