import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FilterPipe } from './filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [PostService]


})
export class HeaderComponent implements OnInit {
  searchType = 'all';
  BARS = 'bars-solid.png';
  SEARCH = ('../../assets/icons/search.png');
  search = '';
  searchResults = null;
  closed = true;
  public currentUser: User = <User>JSON.parse(localStorage.getItem('currentUser'));

  constructor(public _loginService: LoginService, public _postService: PostService) {

  }
  loadSearch() {
    this._postService.getSearchResults(this.search, this.searchType).subscribe(
      resul => {
        console.log(resul.body);
        if (resul.body !== null) {
          this.searchResults = resul.body['data'];
          console.log(this.searchResults);
        }
      }, error => {
        console.log(error);
      }
    );
  }
  searchAction() {
    this.closed = false;
    console.log(this.search);
    console.log(this.searchType);
    this.loadSearch();
  }
  close() {
    this.closed = true;
  }

  ngOnInit() {

  }

}
