import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

declare var $: any;
declare var jquery: any

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {
  public currentUser: User;
  public currentLocation: Localidad;
  public followed = false;
  private id = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute, private _userService: UserService) {

  }

  ngOnInit() {
    if (this.id == null) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.currentLocation = JSON.parse(String(this.currentUser.localidad));
    } else {
      this.loadUser();
    }

    $(document).ready(function () {
      // Hide Header on on scroll down
      var didScroll;
      var navbarHeight = $('.user').outerHeight();
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
        var scroll = $(window).scrollTop();
        if (scroll > navbarHeight) {
          $('.navmenu').addClass("fixed-nav");
          $('.user').addClass("nav-down");

        } else {
          $('.navmenu').removeClass("fixed-nav");
          $('.user').removeClass("nav-down");
        }
      }

    });
  }
  loadUser() {
    this._userService.getUser(Number(this.id)).subscribe(
      resul => {
        if (resul.body !== null) {
          this.currentUser = <User>resul.body['data'];
          console.log(this.currentUser.localidad);
          this.currentLocation = <Localidad> this.currentUser.localidad;
          console.log(this.currentUser);
          console.log(this.currentLocation);
        }
      }, error => {
        console.log(error);
      }
    );
  }

}
