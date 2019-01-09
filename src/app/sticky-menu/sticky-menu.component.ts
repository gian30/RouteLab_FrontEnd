import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.css']
})
export class StickyMenuComponent implements OnInit {

  private BARS = ("../../assets/icons/bars-solid.png");
  private SEARCH = ("../../assets/icons/search.png");


  constructor() { }

  ngOnInit() {
    window.onscroll = function () { myFunction() };

    // Get the header
    var header = document.getElementById("header");

    // Get the offset position of the navbar
    var sticky = header.offsetTop;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  }

}
