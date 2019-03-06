class Locality {
  private _localityID: number;
  private _localityCountry: string;
  private _localityCity: string;
  private _localityAddress: string;
  private _localityLatitude: string;
  private _localityLongitude: string;


  constructor(localityID: number, localityCountry: string, localityCity: string,
              localityAddress: string, localityLatitude: string, localityLongitude: string) {
    this._localityID = localityID;
    this._localityCountry = localityCountry;
    this._localityCity = localityCity;
    this._localityAddress = localityAddress;
    this._localityLatitude = localityLatitude;
    this._localityLongitude = localityLongitude;
  }


  get localityID(): number {
    return this._localityID;
  }

  set localityID(value: number) {
    this._localityID = value;
  }

  get localityCountry(): string {
    return this._localityCountry;
  }

  set localityCountry(value: string) {
    this._localityCountry = value;
  }

  get localityCity(): string {
    return this._localityCity;
  }

  set localityCity(value: string) {
    this._localityCity = value;
  }

  get localityAddress(): string {
    return this._localityAddress;
  }

  set localityAddress(value: string) {
    this._localityAddress = value;
  }

  get localityLatitude(): string {
    return this._localityLatitude;
  }

  set localityLatitude(value: string) {
    this._localityLatitude = value;
  }

  get localityLongitude(): string {
    return this._localityLongitude;
  }

  set localityLongitude(value: string) {
    this._localityLongitude = value;
  }
}
