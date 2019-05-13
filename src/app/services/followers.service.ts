import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()

export class FollowersService {
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

    getFollowers(id: number, func: string) {
        console.log(localStorage);
        let ruta = '/backend/clases/webservice/api.php?controller=social&funcion=' + func + '&id=' + id;
        return this._conexHttp.get(ruta,
            {
                headers:
                    { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
                observe: 'response'
            });
    }

    checkFollowed(info: string) {
        let ruta = '/backend/clases/webservice/api.php?controller=social&funcion=ff&token=' + localStorage.getItem('access_token');
        return this._conexHttp.post(ruta, info, {
            headers:
                { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            observe: 'response'
        });
    }
    followAction(info: string, func: string) {
        let ruta = '/backend/clases/webservice/api.php?controller=social&funcion=' + func;
        return this._conexHttp.post(ruta, info, {
            headers:
                { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
            observe: 'response'
        });
    }

}
