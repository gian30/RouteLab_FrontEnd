import { Component, OnInit, Input } from '@angular/core';
import { FollowersService } from '../services/followers.service';
import { Router } from '@angular/router';
import { UserComponent } from '../user/user.component';

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
    const user = <User>this.usr.currentUser;
    console.log(user.idusuario);
    this._followersService.getFollowers(user.idusuario, func).subscribe(
      resul => {
        console.log(resul.body);
        if (resul.body !== null) {
          this.loadFollowersArray(resul.body['data']);
          console.log(this.followers);
          // this.followers = <User[]>resul.body['data'];
        }
      }, error => {
        console.log(error);
      }
    );
  }

  loadFollowersArray(followersData: any[]) {
    for (const usr of followersData) {
      const follower = <User>usr.usuario;
      this.ifFollowed(follower);
      this.followers.push(<User>usr.usuario);
    }
  }

  ngOnInit() {
    if (this.followed === false) {
      this.loadFollowers('followers');
    } else {
      this.loadFollowers('follows');
    }
  }
  // check if user is followed
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

}


