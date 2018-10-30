import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { supportsScrollBehavior } from '@angular/cdk/platform';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expandColor', [
      state('sleep', style({
        height: '5px'
      })),
      state('activated', style({
        height: '50px',
        'box-shadow': 'rgba(58, 58, 58, 0.41) 0px 3px 12px 0px'
      })),
      state('await', style({
        height: '50px',
        'box-shadow': 'rgba(58, 58, 58, 0.41) 0px 3px 12px 0px'
      })),
      transition('await => activated', animate('400ms 500ms ease-in')),
      transition('sleep => activated', animate('400ms ease-in')),
      transition('activated => *', animate('200ms ease-out'))
    ]),
    trigger('switcher', [
      state('sleep', style({
        display: 'none'
      })),
      state('actived', style({
        display: 'flex'
      })
      ),
      transition('sleep => activated', animate('400ms ease-in')),
      transition('activated => *', animate('200ms ease-out'))
    ])]
})
/**
 *  网站导航架构
 */
export class AppComponent implements OnInit {
  ACTIVATED_STATE = 'activated';
  AWAIT_STATE = 'await';
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
    this.presentState = this.ACTIVATED_STATE;
  }

  /**
   * 监听scroll事件
   */
  @HostListener('window:scroll', [])
  onScroll() {
    const presentYPos = this.scroll.getScrollPosition()[1];
    const posDiff = presentYPos - this.previousYPos;
    this.previousYPos = presentYPos;
    if (posDiff > 10 && presentYPos > 60) {
      // 下滑 swip down
      this.presentState = this.SLEEP_STATE;
    } else if (posDiff < -30 || presentYPos <= 60) {
      // 上划 swip up
      this.presentState = this.AWAIT_STATE;
    }
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
  previous(): void {
    switch (this.presentColor) {
      case this.TECH_COLOR:
        this.changePresentColor(this.VISION_COLOR);
        break;
      case this.VISION_COLOR:
        this.changePresentColor( this.FOO_COLOR);
        break;
      case this.FOO_COLOR:
        this.changePresentColor(this.TECH_COLOR);
        break;
    }
  }

  next(): void {
    switch (this.presentColor) {
      case this.TECH_COLOR:
        this.changePresentColor(this.FOO_COLOR);
        break;
      case this.VISION_COLOR:
        this.changePresentColor(this.TECH_COLOR);
        break;
      case this.FOO_COLOR:
        this.changePresentColor(this.VISION_COLOR);
        break;
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
