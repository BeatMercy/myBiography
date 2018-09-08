import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as showdown from 'showdown';
import { MASONRIES } from './mock-datas/masonry';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('titleState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('* => void', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])]
})
/**
 * 博客主界面
 * Blog main page
 */
export class AppComponent implements OnInit {
  title = 'app';
  color: ThemePalette;
  titleState = 'inactive';

  masonries = MASONRIES;

  ngOnInit(): void {
    console.log('something out?!');

  }
  toggleTitleState() {
    this.titleState === 'active' ? this.titleState = null : this.titleState = 'active';
  }
}
