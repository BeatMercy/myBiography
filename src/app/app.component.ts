import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import { trigger, state, style, transition, animate } from '@angular/animations';
import * as showdown from 'showdown';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])]
})
export class AppComponent implements OnInit {
  title = 'app';
  color: ThemePalette;
  titleState = 'inactive';
  blogText = '';

  ngOnInit(): void {
    const converter = new showdown.Converter();
    this.blogText = converter.makeHtml('#hellow Markdown');
  }
  toggleTitleState() {
    this.titleState = this.titleState === 'inactive' ? this.titleState = 'active' : 'inactive';
  }
}
