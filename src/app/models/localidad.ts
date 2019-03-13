class Localidad {
  private _idlocalidad: number;
  private _pais: string;
  private _poblacion: string;
  private _direccion: string;
  private _latitud: string;
  private _longitud: string;


  constructor(idlocalidad: number, pais: string, poblacion: string, direccion: string, latitud: string, longitud: string) {
    this._idlocalidad = idlocalidad;
    this._pais = pais;
    this._poblacion = poblacion;
    this._direccion = direccion;
    this._latitud = latitud;
    this._longitud = longitud;
  }

  get idlocalidad(): number {
    return this._idlocalidad;
  }

  set idlocalidad(value: number) {
    this._idlocalidad = value;
  }

  get pais(): string {
    return this._pais;
  }

  set pais(value: string) {
    this._pais = value;
  }

  get poblacion(): string {
    return this._poblacion;
  }

  set poblacion(value: string) {
    this._poblacion = value;
  }

  get direccion(): string {
    return this._direccion;
  }

  set direccion(value: string) {
    this._direccion = value;
  }

  get latitud(): string {
    return this._latitud;
  }

  set latitud(value: string) {
    this._latitud = value;
  }

  get longitud(): string {
    return this._longitud;
  }

  set longitud(value: string) {
    this._longitud = value;
  }
}
