import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Showdown from 'showdown';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  mdPath = 'assets/md/tech/messy/start up md.md';
  mdContent: string;
  converter = new Showdown.Converter();
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.mdPath, { responseType: 'text' })
      .subscribe(
        (next: string) => {
          this.mdContent = this.converter.makeHtml(next);
        }
      );
  }

}
