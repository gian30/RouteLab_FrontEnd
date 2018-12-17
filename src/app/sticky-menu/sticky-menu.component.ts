import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.css']
})
export class StickyMenuComponent implements OnInit {
  private BARS = require("../../assets/icons/bars-solid.png");
  private SEARCH = require("../../assets/icons/search.png");
  //private HOMEBG = require("../../assets/img/home_bg.png"); componente home

  constructor() { }

  ngOnInit() {
  }

}
