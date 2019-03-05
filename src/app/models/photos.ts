class Photo {
  private _photoID: number;
  private _photoLocationID: number;
  private _photoURL: string;


  constructor(photoID: number, photoLocationID: number, photoURL: string) {
    this._photoID = photoID;
    this._photoLocationID = photoLocationID;
    this._photoURL = photoURL;
  }


  get photoID(): number {
    return this._photoID;
  }

  set photoID(value: number) {
    this._photoID = value;
  }

  get photoLocationID(): number {
    return this._photoLocationID;
  }

  set photoLocationID(value: number) {
    this._photoLocationID = value;
  }

  get photoURL(): string {
    return this._photoURL;
  }

  set photoURL(value: string) {
    this._photoURL = value;
  }
}
