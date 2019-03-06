class User {
  private _userID: number;
  private _userUsername: string;
  private _userName: string;
  private _userEmail: string;
  private _userAge: string;
  private _userPhone: string;
  private _userLocality: Locality;
  private _userPhoto: string;
  private _userAdmin: boolean;
  private _userEmpresa: string;

  constructor(userID: number, userUsername: string, userName: string, userEmail: string, userAge: string,
              userPhone: string, userLocality: Locality, userPhoto: string, userAdmin = false, userEmpresa = '') {
    this._userID = userID;
    this._userUsername = userUsername;
    this._userName = userName;
    this._userEmail = userEmail;
    this._userAge = userAge;
    this._userPhone = userPhone;
    this._userLocality = userLocality;
    this._userPhoto = userPhoto;
    this._userAdmin = userAdmin;
    this._userEmpresa = userEmpresa;
  }

  get userID(): number {
    return this._userID;
  }

  set userID(value: number) {
    this._userID = value;
  }

  get userUsername(): string {
    return this._userUsername;
  }

  set userUsername(value: string) {
    this._userUsername = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userEmail(): string {
    return this._userEmail;
  }

  set userEmail(value: string) {
    this._userEmail = value;
  }

  get userAge(): string {
    return this._userAge;
  }

  set userAge(value: string) {
    this._userAge = value;
  }

  get userPhone(): string {
    return this._userPhone;
  }

  set userPhone(value: string) {
    this._userPhone = value;
  }

  get userLocality(): Locality {
    return this._userLocality;
  }

  set userLocality(value: Locality) {
    this._userLocality = value;
  }

  get userPhoto(): string {
    return this._userPhoto;
  }

  set userPhoto(value: string) {
    this._userPhoto = value;
  }

  get userAdmin(): boolean {
    return this._userAdmin;
  }

  set userAdmin(value: boolean) {
    this._userAdmin = value;
  }

  get userEmpresa(): string {
    return this._userEmpresa;
  }

  set userEmpresa(value: string) {
    this._userEmpresa = value;
  }
}
