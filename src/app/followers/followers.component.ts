import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  private STAR = ('../../assets/icons/star-black.png');
  private STARNF = ('../../assets/icons/star-black2.png');
  constructor() { }

  ngOnInit() {
  }

}
