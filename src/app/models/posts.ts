export class Post {
  private _postID: number;
  private _postTitle: string;
  private _postDescription: string;
  private _postType: string;
  private _userID: number;
  private _postImg: string;


  constructor(postID: number, postTitle: string, description: string, postType = '', userID: number, postImg = "../../assets/img/sample_route.png") {
    this._postID = postID;
    this._postTitle = postTitle;
    this._postDescription = description;
    this._postType = postType;
    this._userID = userID;
    this._postImg = postImg;
  }


  get postID(): number {
    return this._postID;
  }

  set postID(value: number) {
    this._postID = value;
  }

  get postTitle(): string {
    return this._postTitle;
  }

  set postTitle(value: string) {
    this._postTitle = value;
  }

  get postImg(): string {
    return this._postImg;
  }

  set postImg(value: string) {
    this._postImg = value;
  }

  get postDescription(): string {
    return this._postDescription;
  }

  set postDescription(value: string) {
    this._postDescription = value;
  }

  get postType(): string {
    return this._postType;
  }

  set postType(value: string) {
    this._postType = value;
  }

  get userID(): number {
    return this._userID;
  }

  set userID(value: number) {
    this._userID = value;
  }
}
