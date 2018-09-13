import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('titleState', [
      state('inactive', style({
        background: 'white'
      })),
      state('active', style({
        background: 'pink'
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
  title = 'BM';
  color: ThemePalette;
  titleState = '';

  ngOnInit() {

  }

  toggleTitleState() {
    this.titleState === 'active' ? this.titleState = '' : this.titleState = 'active';
    // this.screenLevel$.subscribe();
  }

}
