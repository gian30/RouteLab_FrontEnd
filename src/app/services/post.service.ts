import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    const ruta = '/backend/clases/webservice/api.php?controller=post&funcion=todo';
    return this._conexHttp.get(ruta,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  getPost(id) {

    const ruta = '/backend/clases/webservice/api.php?controller=post&funcion=postbyid&id=' + id;
    return this._conexHttp.get(ruta,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  getComment(id) {

    const ruta = '/backend/clases/webservice/api.php?controller=comentariopost&funcion=comenpost&id=' + id;
    return this._conexHttp.get(ruta,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  postComment(info: string) {
    const ruta = '/backend/clases/webservice/api.php?controller=comentariopost&funcion=comentario&token=' + localStorage.getItem('access_token');
    return this._conexHttp.post(ruta, info,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  postPost(info: string) {
    const ruta = '/backend/clases/webservice/api.php?controller=post&funcion=post&token=' + localStorage.getItem('access_token');
    let httpHeaders = new HttpHeaders();
    return this._conexHttp.post(ruta, JSON.stringify(info),
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  postPostImages(photos: File[], idpost: string) {
    const ruta = '/backend/clases/webservice/api.php?controller=post&funcion=foto&token=' + localStorage.getItem('access_token')+'&id='+idpost;
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('enctype', "multipart/form-data");
    httpHeaders.append('Content - Type', 'application/x-www-form-urlencoded');
    const fd = new FormData();
    for (let file of photos) {
      fd.append('images[]', file);
    }
    console.log(JSON.stringify(fd));
    return this._conexHttp.post(ruta, fd,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

  postImage(currentFileUpload: File, funcion: string) {
    let httpHeaders = new HttpHeaders();
    httpHeaders.append('enctype', "multipart/form-data");
    httpHeaders.append('Content - Type', 'application/x-www-form-urlencoded');
    const formData = new FormData();
    formData.append('photo', currentFileUpload);
    let ruta = '/backend/clases/webservice/api.php?controller=usuario&funcion=' + funcion + '&token=' + localStorage.getItem('access_token');
    return this._conexHttp.post(ruta, formData,
      {
        headers: httpHeaders,
        observe: 'response'
      });
  }

  getRecomendacion(id: string) {
    const ruta = '/backend/clases/webservice/api.php?controller=recasociada&funcion=recid&id=' + id;
    return this._conexHttp.get(ruta,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  getRecomendaciones() {
    const ruta = '/backend/clases/webservice/api.php?controller=recomendaciones&funcion=recomendaciones&token=' + localStorage.getItem('access_token');
    return this._conexHttp.get(ruta,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }

  getSearchResults(searchText: string, searchType: string) {
    let funcion = "buscadorpost";
    let search = '{"valor":"' + searchText + '"}';
    if (searchType == "users") {
      funcion = 'buscadorusu';
      search = '{"nombreusuario":"' + searchText + '"}';
    }
    const ruta = '/backend/clases/webservice/api.php?controller=post&funcion=' + funcion;
    return this._conexHttp.post(ruta, search,
      {
        headers:
          { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        observe: 'response'
      });
  }
}
