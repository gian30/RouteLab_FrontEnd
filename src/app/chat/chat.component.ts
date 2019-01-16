import {Component, AfterViewChecked, ElementRef, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  constructor() {
  }

  opened = true;
  openedUser = true;

  userselected = {
    username : '',
    profilePhoto : ''
  };


  @ViewChild('scrollMe') private myScrollContainer: ElementRef;


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch(err) { }
  }

  openUser() {
    this.openedUser = !this.openedUser;
  }

  openChat() {
    this.opened = !this.opened;
  }

  ngOnInit() {
    this.scrollToBottom();
  }

}
