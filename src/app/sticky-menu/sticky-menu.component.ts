import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sticky-menu',
  templateUrl: './sticky-menu.component.html',
  styleUrls: ['./sticky-menu.component.css']
})
export class StickyMenuComponent implements OnInit {

  private BARS = 'bars-solid.png';
  private SEARCH = ('../../assets/icons/search.png');


  constructor() { }

  ngOnInit() {

  }

}
