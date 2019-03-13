
class User {
  private _idusuario: number;
  private _nombreusuario: string;
  private _email: string;
  private _pass: string;
  private _nombre: string;
  private _edad: string;
  private _localidad: Localidad;
  private _foto: string;
  private _telefono: string;
  private _empresa: string;
  private _nombre_empresa: string;
  private _token: string;

  constructor(idusuario: number, nombreusuario: string, email: string, pass: string, nombre: string, edad: string, localidad: Localidad, foto: string, telefono: string, empresa: string, nombre_empresa: string, token: string) {
    this._idusuario = idusuario;
    this._nombreusuario = nombreusuario;
    this._email = email;
    this._pass = pass;
    this._nombre = nombre;
    this._edad = edad;
    this._localidad = localidad;
    this._foto = foto;
    this._telefono = telefono;
    this._empresa = empresa;
    this._nombre_empresa = nombre_empresa;
    this._token = token;
  }

  get idusuario(): number {
    return this._idusuario;
  }

  set idusuario(value: number) {
    this._idusuario = value;
  }

  get nombreusuario(): string {
    return this._nombreusuario;
  }

  set nombreusuario(value: string) {
    this._nombreusuario = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get pass(): string {
    return this._pass;
  }

  set pass(value: string) {
    this._pass = value;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get edad(): string {
    return this._edad;
  }

  set edad(value: string) {
    this._edad = value;
  }

  get localidad(): Localidad {
    return this._localidad;
  }

  set localidad(value: Localidad) {
    this._localidad = value;
  }

  get foto(): string {
    return this._foto;
  }

  set foto(value: string) {
    this._foto = value;
  }

  get telefono(): string {
    return this._telefono;
  }

  set telefono(value: string) {
    this._telefono = value;
  }

  get empresa(): string {
    return this._empresa;
  }

  set empresa(value: string) {
    this._empresa = value;
  }

  get nombre_empresa(): string {
    return this._nombre_empresa;
  }

  set nombre_empresa(value: string) {
    this._nombre_empresa = value;
  }

  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }
}
