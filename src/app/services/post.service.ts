import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable()

export class PostService {
  httpHeaders = new HttpHeaders({
    'Access-Control-Allow-Origin': 'http://routelab.es',
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET POST, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers': 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
  });

  constructor(private _conexHttp: HttpClient) {
  }

  getPosts() {
    let ruta = '/backend/clases/webservice/api.php?controller=post';
    return this._conexHttp.get(ruta,
      {
        headers:
          {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        observe: 'response'
      });
  }

  getPost(id) {
    let ruta = '/backend/clases/webservice/api.php?controller=post&id='+id;
    return this._conexHttp.get(ruta,
      {
        headers:
          {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        observe: 'response'
      });
  }


}
