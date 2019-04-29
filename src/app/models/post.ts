export class Post {
  private _idpost: number;
  private _titulo: string;
  private _descripcion: string;
  private _tipo: string;
  private _idusuario: number;
  private _markers: any = [];
  private _media: number;

  get idpost(): number {
    return this._idpost;
  }

  set idpost(value: number) {
    this._idpost = value;
  }

  get titulo(): string {
    return this._titulo;
  }

  set titulo(value: string) {
    this._titulo = value;
  }

  get descripcion(): string {
    return this._descripcion;
  }

  set descripcion(value: string) {
    this._descripcion = value;
  }

  get tipo(): string {
    return this._tipo;
  }

  set tipo(value: string) {
    this._tipo = value;
  }

  get idusuario(): number {
    return this._idusuario;
  }

  set idusuario(value: number) {
    this._idusuario = value;
  }

  get markers(): any {
    return this._markers;
  }

  set markers(value: any) {
    this._markers = value;
  }

  get media(): number {
    return this._media;
  }

  set media(value: number) {
    this._media = value;
  }
}
