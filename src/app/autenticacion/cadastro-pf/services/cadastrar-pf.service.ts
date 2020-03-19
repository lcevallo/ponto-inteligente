import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CadastroPf} from '../models';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class CadastrarPfService {

  private  readonly  PATH: string = 'cadastrar-pf';

  constructor(private http: HttpClient) { }

  cadastrar(cadastroPf: CadastroPf): Observable<any> {
    return this.http.post(environment.baseApiUrl + this.PATH, cadastroPf);
  }
}
