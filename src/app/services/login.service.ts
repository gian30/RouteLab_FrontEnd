import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {LoginComponent} from '../login/login.component';


@Injectable()

export class LoginService {

  constructor(private _conexHttp: HttpClient) {
  }


  sendRegister(info: String, funcion: String) {
    let httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'

    });

    let ruta = '/api.php?controller=usuario&funcion=' + funcion;

    return this._conexHttp.post(ruta, info,
      {
        headers:
          {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        observe: 'response'
      });
  }


}
