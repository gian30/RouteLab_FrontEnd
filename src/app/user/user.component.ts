import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import { strict } from 'assert';
import { FollowersService } from '../services/followers.service';

declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, FollowersService]
})
export class UserComponent implements OnInit {
  public currentUser: User;
  public currentLocation: Localidad;
  public followed = false;
  public id = this.route.snapshot.paramMap.get('id');
  public imagePath;
  public currentFileUpload: File;
  public me: User = <User>JSON.parse(localStorage.getItem('currentUser'));
  imgURL: any;
  imagesURL: any[] = [];

  constructor(
    public route: ActivatedRoute,
    public _userService: UserService,
    public _loginService: LoginService,
    public _followersService: FollowersService,
  ) { }

  ngOnInit() {
    if (this.id == null) {
      this.currentUser = <User>JSON.parse(localStorage.getItem('currentUser'));
      this.currentLocation = JSON.parse(String(this.currentUser.localidad));
    } else {
      this.loadUser();

    }

    $(document).ready(function () {
      // Hide Header on on scroll down
      let didScroll;
      const navbarHeight = $('.user').outerHeight();
      console.log(navbarHeight);

      $(window).scroll(function (event) {
        didScroll = true;
      });

      setInterval(function () {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 50);

      function hasScrolled() {
        const scroll = $(window).scrollTop();
        if (scroll > navbarHeight) {
          $('.navmenu').addClass('fixed-nav');
          $('.user').addClass('nav-down');
        } else {
          $('.navmenu').removeClass('fixed-nav');
          $('.user').removeClass('nav-down');
        }
      }
    });
  }
  isMe() {
    const me = <User>JSON.parse(localStorage.getItem('currentUser'));
    if (this.id == null) {
      return true;
    }
    if (this.id === String(me.idusuario)) {
      return true;
    } else {
      return false;
    }
  }

  sendPhoto(funcion: string) {
    this._userService.postImage(this.currentFileUpload, funcion).subscribe(
      resul => {
        console.log(resul.body);
      },
      error => {
        console.log(error);
      }
    );
  }

  ifFollowed(follower: User) {
    let info = {};
    info = {
      'idseguido': JSON.parse(localStorage.getItem('currentUser')).idusuario, // our id
      'idseguidor': follower.idusuario // id to check
    };
    this._followersService.checkFollowed(JSON.stringify(info)).subscribe(
      resul => {
        if (resul.body['data'] === 'true') {
          follower.followed = true;
        } else {
          follower.followed = false;
        }
      }, error => {
        console.log(error);
      }
    );
  }
  // follow or unfollow
  followAction(follower: User, func: string) {
    let info = {};
    info = {
      'idseguido': JSON.parse(localStorage.getItem('currentUser')).idusuario, // our id
      'idseguidor': follower.idusuario // id to unfollow/follow
    };
    console.log(info);
    this._followersService.followAction(JSON.stringify(info), func).subscribe(
      resul => {
        follower.followed = !follower.followed;
        console.log(resul);
      }, error => {
        console.log(error);
      }
    );
  }

  addPhoto(event) {
    this.currentFileUpload = event.target.files[0];
    this.sendPhoto('fotoperfil');
  }

  addBackground(event) {
    this.currentFileUpload = event.target.files[0];
    this.sendPhoto('fotoback');
  }

  loadUser() {
    this._userService.getUser(Number(this.id)).subscribe(
      resul => {
        if (resul.body !== null) {
          this.currentUser = <User>resul.body['data'];
          console.log(this.currentUser.localidad);
          this.currentLocation = <Localidad>this.currentUser.localidad;
          console.log(this.currentUser);
          this.ifFollowed(this.currentUser);
          console.log(this.currentLocation);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
