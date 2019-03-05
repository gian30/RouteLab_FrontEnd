class Post {
  private _postID: number;
  private _postTitle: string;
  private _description: string;
  private _postType: string;
  private _userID: number;


  constructor(postID: number, postTitle: string, description: string, postType: string, userID: number) {
    this._postID = postID;
    this._postTitle = postTitle;
    this._description = description;
    this._postType = postType;
    this._userID = userID;
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

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
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
