import {Component, OnInit} from '@angular/core';
import * as jQuery from 'jquery';

declare var $: any;
declare var jquery: any

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
public currentUser: User;
  constructor() {
  }

  ngOnInit() {

    const user = JSON.parse(localStorage.getItem('currentUser'));
    this.currentUser = <User> user;
    console.log(this.currentUser);
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

        }else {
          $('.navmenu').removeClass("fixed-nav");
          $('.user').removeClass("nav-down");
        }
      }

    });
  }


}
