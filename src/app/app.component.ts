import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { of, BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, merge, delay } from 'rxjs/operators';
import { ScrollDispatcher, CdkScrollable } from '@angular/cdk/overlay';
import { Scroll } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { supportsScrollBehavior } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expandColor', [
      state('sleep', style({
        height: '15%'
      })),
      state('activated', style({
        height: '70%'
      })),
      transition('sleep => activated', animate('400ms ease-in')),
      transition('activated => sleep', animate('400ms ease-out'))
    ])]
})
/**
 *  网站导航架构
 */
export class AppComponent implements OnInit {
  ACTIVATED_STATE = 'activated';
  SLEEP_STATE = 'sleep';

  FOO_COLOR = '#f60';
  VISION_COLOR = '#ffff00';
  TECH_COLOR = '#0e76cc';


  presentColor = this.TECH_COLOR;
  presentState = this.ACTIVATED_STATE;
  previousYPos = 0;

  constructor(private scroll: ViewportScroller) {
    if (supportsScrollBehavior()) {
      console.log('support scroll behavior');
    }
  }

  ngOnInit() {
  }

  /**
   * 更改当前await导航栏
   */
  changePresentColor(color: string) {
    switch (color) {
      case this.FOO_COLOR: this.presentColor = this.FOO_COLOR; break;
      case this.VISION_COLOR: this.presentColor = this.VISION_COLOR; break;
      case this.TECH_COLOR: this.presentColor = this.TECH_COLOR; break;
      default: this.presentColor = this.TECH_COLOR;
    }
  }

  /**
   * 监听scroll事件
   * @param event 
   */
  @HostListener('window:scroll', [])
  onScroll() {
    const presentYPos = this.scroll.getScrollPosition()[1];
    if (presentYPos > this.previousYPos && presentYPos > 60) {
      // 下滑 swip down
      this.presentState = this.SLEEP_STATE;
    } else {
      // 上划 swip up
      this.presentState = this.ACTIVATED_STATE;
    }
    this.previousYPos = presentYPos;
  }

  getExpandColor(name: string): string {
    switch (name) {
      case this.TECH_COLOR:
        return this.presentColor === this.TECH_COLOR ? this.presentState : this.SLEEP_STATE;
      case this.VISION_COLOR:
        return this.presentColor === this.VISION_COLOR ? this.presentState : this.SLEEP_STATE;
      case this.FOO_COLOR:
        return this.presentColor === this.FOO_COLOR ? this.presentState : this.SLEEP_STATE;
      default: return this.SLEEP_STATE;
    }
  }

  /**
   * 使用promise特性配合 async函数 await关键字实现等待sleep效果
   * @param ms 等待时间，单位ms
   */
  sleep(ms: number) {
    return new Promise(nulTask => setTimeout(nulTask, ms));
  }
}
