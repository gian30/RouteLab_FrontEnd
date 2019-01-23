import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginComponent} from './login.component';


@Injectable()

export class LoginService {

  constructor(private _conexHttp: HttpClient) {
  }


  sendRegister(info: String) {
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
    });
    let ruta = 'http://localhost:8080/PHP/';
    return this._conexHttp.post(ruta, info,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

}
