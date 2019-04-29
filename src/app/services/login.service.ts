import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginComponent } from '../login/login.component';
import { Router } from "@angular/router";


@Injectable()

export class LoginService {

  constructor(private _conexHttp: HttpClient, private router: Router) {
  }


  sendRegister(info: String, funcion: String) {
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin': 'http://www.routelab.es',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET POST, OPTIONS, PUT, DELETE',
      'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'

    });

    const ruta = '/backend/clases/webservice/api.php?controller=usuario&funcion=' + funcion;
    return this._conexHttp.post(ruta, info,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }


  checkEmail(email: String) {
    const ruta = 'backend/clases/webservice/api.php?controller=usuario&funcion=existe';
    return this._conexHttp.post(ruta, email,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }


  logout() {
    if (confirm("Estas seguro que quieres cerrar tu sesión?")) {
      localStorage.removeItem('access_token');
      this.router.navigate(['/main']);
    }
  }

  isAuthenticated() {
    // get the auth token from localStorage
    const token = localStorage.getItem('access_token');
    // check if token is set, then...
    if (token) {
      return true;
    }
    return false;
  }


}
