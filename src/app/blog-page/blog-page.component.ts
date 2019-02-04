import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import * as Showdown from 'showdown'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  mdPath = 'assets/md/'
  mdContent: string
  converter = new Showdown.Converter()
  constructor(private http: HttpClient, private router: ActivatedRoute) {
  }

  ngOnInit() {
    const blogId = this.router.snapshot.paramMap.get('id')
    this.mdPath += `tech/messy/${blogId}.md`
    this.http.get(this.mdPath, { responseType: 'text' })
      .subscribe(
        (next: string) => {
          this.mdContent = this.converter.makeHtml(next)
        }
      )
  }

}
