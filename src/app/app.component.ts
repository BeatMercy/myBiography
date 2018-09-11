import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MASONRIES } from './mock-datas/masonry';
import { BehaviorSubject, ObservableLike, of, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ScreenService } from './service/screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('titleState', [
      state('inactive', style({
        transform: 'scale(1)'
      })),
      state('active', style({
        transform: 'scale(1.1)'
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
  title = 'app';
  color: ThemePalette;
  titleState = '';
  masonries = MASONRIES;
  screenLevel$ = new BehaviorSubject(2);
  requireColumn = 5;
  columns = new Array<Array<Object>>(5);
  /**
   * 根据屏幕宽度初始化需要展示列
   * 各个列内填入数据数据
   */
  resizeMarsonryObserver = {
    next: (x) => {
      this.columns[0] = new Array();
      this.columns[1] = new Array();
      this.columns[2] = new Array();
      this.columns[3] = new Array();
      this.columns[4] = new Array();
      switch (x) {
        case 0: this.requireColumn = 1; break;
        case 1: this.requireColumn = 3; break;
        case 2: this.requireColumn = 5; break;
        default: break;
      }
      for (let i = 0; i < this.masonries.length; i++) {
        switch (i % this.requireColumn) {
          case 0: this.columns[0].push(this.masonries[i]); break;
          case 1: this.columns[1].push(this.masonries[i]); break;
          case 2: this.columns[2].push(this.masonries[i]); break;
          case 3: this.columns[3].push(this.masonries[i]); break;
          case 4: this.columns[4].push(this.masonries[i]); break;
          default: break;
        }
      }
      this.screenService.defaultScreenLevelSubscribe();
      console.log(`Now the screen Level :${x}, require column: ${this.requireColumn}`);
    },
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private screenService: ScreenService) {

  }

  changeRequireColumn(num: number) {

  }

  ngOnInit(): void {
    this.screenLevel$ = this.screenService.screenLevel$;
    this.screenLevel$.pipe(debounceTime(200)).subscribe(this.resizeMarsonryObserver);
  }
  toggleTitleState() {
    this.titleState === 'active' ? this.titleState = '' : this.titleState = 'active';
    // this.screenLevel$.subscribe();
  }

}
