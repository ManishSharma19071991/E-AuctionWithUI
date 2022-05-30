import {Component, Input, OnInit, Output, EventEmitter, Inject} from '@angular/core';

import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input('notification') notification;
  @Output('logout') logoutEvent = new EventEmitter();
  @Output('themeChange') themeChangeEvent = new EventEmitter();

 

  constructor( @Inject(DOCUMENT) private _doc) {
  }

  ngOnInit(): void {
  }

  logoutHandler() {
    this.logoutEvent.emit({logout: true});
  }

  changeThemeHandler(data) {
    this.themeChangeEvent.emit(data);
  }
}
