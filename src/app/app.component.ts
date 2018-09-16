import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, merge, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('sideExpand', [
      state('inactive', style({
        width: '15%'
      })),
      state('active', style({
        width: '70%'
      })),
      transition('void => *', animate('400ms ease-in')),
      transition('active => void', animate('400ms ease-out'))
    ])]
})
/**
 * 博客主界面
 * Blog main page
 */
export class AppComponent implements OnInit {
  ACTIVESTATE = 'active';
  INACTIVESTATE = 'inactive';
  LEFTCOLOR = 'orange';
  MIDCOLOR = 'yellow';
  RIGHTCOLOR = 'blue';


  color: ThemePalette;
  presentSideNavColor = '';
  leftColorState = '';
  midColorState = '';
  rightColorState = '';
  leftColorHover = false;
  midColorHover = false;
  rightColorHover = false;

  ngOnInit() {
    this.presentSideNavColor = this.RIGHTCOLOR;
    this.changePresentColor(this.presentSideNavColor);
  }

  changePresentColor(colorName: string) {
    switch (colorName) {
      case this.LEFTCOLOR:
        this.leftColorState = this.ACTIVESTATE;
        this.midColorState = this.INACTIVESTATE;
        this.rightColorState = this.INACTIVESTATE;
        break;
      case this.MIDCOLOR:
        this.leftColorState = this.INACTIVESTATE;
        this.midColorState = this.ACTIVESTATE;
        this.rightColorState = this.INACTIVESTATE;
        break;
      case this.RIGHTCOLOR:
        this.leftColorState = this.INACTIVESTATE;
        this.midColorState = this.INACTIVESTATE;
        this.rightColorState = this.ACTIVESTATE;
        break;
      default: this.leftSideNavExpand();
    }
    this.presentSideNavColor = colorName;
  }

  retoreSideNavState() {
    this.changePresentColor(this.presentSideNavColor);
    this.leftColorHover = this.midColorHover = this.rightColorHover = false;
  }

  leftSideNavExpand() {
    this.leftColorHover = true;
    setTimeout(() => {
      if (this.leftColorHover) {
        this.leftColorState = this.ACTIVESTATE;
        this.midColorState = this.INACTIVESTATE;
        this.rightColorState = this.INACTIVESTATE;
      }
    }, 100);
  }

  midSideNavExpand() {
    this.midColorHover = true;
    setTimeout(() => {
      if (this.midColorHover) {
        this.leftColorState = this.INACTIVESTATE;
        this.midColorState = this.ACTIVESTATE;
        this.rightColorState = this.INACTIVESTATE;
      }
    }, 100);
  }

  rightSideNavExpand() {
    this.rightColorHover = true;
    setTimeout(() => {
      if (this.rightColorHover) {
        this.leftColorState = this.INACTIVESTATE;
        this.midColorState = this.INACTIVESTATE;
        this.rightColorState = this.ACTIVESTATE;
      }
    }, 100);
  }

}
