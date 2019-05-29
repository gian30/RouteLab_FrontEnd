import { Component, AfterViewChecked, ElementRef, ViewChild, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, from } from 'rxjs';
import { FollowersService } from '../services/followers.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService, FollowersService]
})
export class ChatComponent implements OnInit, AfterViewChecked {

  constructor(public cs: ChatService, public _followersService: FollowersService, ) {
    // foll.loadFollowers("follows");
    // console.log(foll.followers)

  }
  public me: User = <User>JSON.parse(localStorage.getItem('currentUser'));
  users: User[] = [];
  opened = false;
  openedUser = false;
  chat$: Observable<any>;
  newMsg: string;
  userselected: User;
  chats: any[] = [];
  mychats: any[] = [];
  msgSub;
  msgSub1;

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;


  loadFollowers(func: string) {
    this._followersService.getFollowers(this.me.idusuario, func).subscribe(
      resul => {
        console.log(resul.body);
        if (resul.body !== null) {
          this.loadFollowersArray(resul.body['data']);
          console.log(this.users);
          // this.followers = <User[]>resul.body['data'];
        }
      }, error => {
        console.log(error);
      }
    );
  }

  loadFollowersArray(followersData: any[]) {
    for (const usr of followersData) {
      this.users.push(<User>usr.usuario);
    }
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  openUser(user: User) {
    this.openedUser = !this.openedUser;
    this.userselected = user;
    this.getMessages();
  }


  toDate(time) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return (hours + ':' + minutes);
  }

  getMessages() {
    this.chats = [];
    this.mychats = [];
    this.unsub();
    this.msgSub = this.cs.getMyMsgs(String(this.me.idusuario), String(this.userselected.idusuario)).subscribe(chats => {
      if (chats !== undefined) {
        chats['info'].forEach(chat => {
          this.mychats.push(chat);
          this.chats.push(chat);
        });
      }
    });

    this.msgSub1 = this.cs.getReceiverMsg(String(this.me.idusuario), String(this.userselected.idusuario)).subscribe(chats => {
      if (chats !== undefined) {
        chats['info'].forEach(chat => {
          this.chats.push(chat);
        });
      }
    });
  }
  unsub() {
    if (this.msgSub1) {
      this.msgSub1.unsubscribe();
    }
    if (this.msgSub) {
      this.msgSub.unsubscribe();
    }
  }

  get sortData() {
    return this.chats.sort((a, b) => {
      return <any>new Date(a.createdAt) - <any>new Date(b.createdAt);
    });
  }

  openChat() {
    this.opened = !this.opened;
  }






  submit() {
    this.unsub();
    if (this.mychats.length === 0) {
      this.cs.create(this.me.idusuario, this.userselected.idusuario, this.newMsg);
      this.newMsg = '';
    } else {
      this.cs.sendMessage(this.me.idusuario, this.userselected.idusuario, this.newMsg);
      this.newMsg = '';
    }
    this.getMessages();
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }

  ngOnInit() {
    this.scrollToBottom();
    this.loadFollowers('follows');
  }

}
