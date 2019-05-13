import { Component, OnInit } from "@angular/core";
import * as jQuery from "jquery";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "../services/user.service";
import { LoginService } from "../services/login.service";
import { strict } from "assert";

declare var $: any;
declare var jquery: any;

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  public currentUser: User;
  public currentLocation: Localidad;
  public followed = false;
  public id = this.route.snapshot.paramMap.get("id");
  public imagePath;
  public currentFileUpload: File;
  public me: User = <User>JSON.parse(localStorage.getItem("currentUser"));
  imgURL: any;
  imagesURL: any[] = [];
  constructor(
    public route: ActivatedRoute,
    public _userService: UserService,
    public _loginService: LoginService
  ) { }

  ngOnInit() {
    if (this.id == null) {
      this.currentUser = <User>JSON.parse(localStorage.getItem("currentUser"));
      this.currentLocation = JSON.parse(String(this.currentUser.localidad));
    } else {
      this.loadUser();
    }

    $(document).ready(function () {
      // Hide Header on on scroll down
      let didScroll;
      const navbarHeight = $(".user").outerHeight();
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
          $(".navmenu").addClass("fixed-nav");
          $(".user").addClass("nav-down");
        } else {
          $(".navmenu").removeClass("fixed-nav");
          $(".user").removeClass("nav-down");
        }
      }
    });
  }
  isMe() {
    let me = <User>JSON.parse(localStorage.getItem("currentUser"));
    if (this.id == null) {
      return true;
    }
    if (this.id == String(me.idusuario)) {
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

  addPhoto(event) {
    this.currentFileUpload = event.target.files[0];
    this.sendPhoto("fotoperfil");
  }

  addBackground(event) {
    this.currentFileUpload = event.target.files[0];
    this.sendPhoto("fotoback");
  }

  loadUser() {
    this._userService.getUser(Number(this.id)).subscribe(
      resul => {
        if (resul.body !== null) {
          this.currentUser = <User>resul.body["data"];
          console.log(this.currentUser.localidad);
          this.currentLocation = <Localidad>this.currentUser.localidad;
          console.log(this.currentUser);
          console.log(this.currentLocation);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
