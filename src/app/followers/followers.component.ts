import { Component, OnInit, Input } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component'

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css'],
  providers: [FollowersService]
})
export class FollowersComponent implements OnInit {
  STAR = ('../../assets/icons/star-black.png');
  STARNF = ('../../assets/icons/star-black2.png');
  @Input()
  followed: boolean;
  followers: User[] = [];
  constructor(public _followersService: FollowersService, private router: Router, private usr: UserComponent) { }

  loadFollowers(func: string) {
    let user = <User> this.usr.currentUser;
    console.log(user.idusuario);
    this._followersService.getFollowers(user.idusuario, func).subscribe(
      resul => {
        console.log(resul.body)
        if (resul.body !== null) {
          this.loadFollowersArray(resul.body['data']);
          console.log(this.followers);
          //this.followers = <User[]>resul.body['data'];
        }
      }, error => {
        console.log(error);
      }
    );

  }
  loadFollowersArray(followersData: any[]) {
    for (let usr of followersData) {
      this.followers.push(<User>usr.usuario);
    }
  }

  ngOnInit() {
    console.log(this.followed);
    if (this.followed == false) {
      this.loadFollowers("followers");
    } else {
      this.loadFollowers("follows");
    }
  }
}


