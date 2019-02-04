import { Component, OnInit, TemplateRef } from '@angular/core'
import { ScreenService } from '../service/screen.service'
import { BehaviorSubject } from 'rxjs'
import { MASONRIES } from '../mock-datas/masonry'
import { distinctUntilChanged, debounceTime } from 'rxjs/operators'
import { BlogPageComponent } from '../blog-page/blog-page.component'

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  blogshow: TemplateRef<BlogPageComponent>
  ctx = {
    something: 'something'
  }

  masonries = MASONRIES
  screenLevel$ = new BehaviorSubject(2)
  requireColumn = 5
  columns = new Array<Array<Object>>(5)
  /**
   * 根据屏幕宽度初始化需要展示列
   * 各个列内填入数据数据
   */
  resizeMarsonryObserver = {
    next: (x) => {
      this.columns[0] = new Array()
      this.columns[1] = new Array()
      this.columns[2] = new Array()
      this.columns[3] = new Array()
      this.columns[4] = new Array()
      switch (x) {
        case 0: this.requireColumn = 1; break
        case 1: this.requireColumn = 3; break
        case 2: this.requireColumn = 5; break
        default: break
      }
      for (let i = 0; i < this.masonries.length; i++) {
        switch (i % this.requireColumn) {
          case 0: this.columns[0].push(this.masonries[i]); break
          case 1: this.columns[1].push(this.masonries[i]); break
          case 2: this.columns[2].push(this.masonries[i]); break
          case 3: this.columns[3].push(this.masonries[i]); break
          case 4: this.columns[4].push(this.masonries[i]); break
          default: break
        }
      }
      this.screenService.defaultScreenLevelSubscribe()
    },
    error: err => console.error('Resize Marsonry got an error: ' + err),
    complete: () => console.log('Resize Marsonry got a complete notification'),
  }

  constructor(private screenService: ScreenService) {
  }

  ngOnInit(): void {
    this.screenLevel$ = this.screenService.screenLevel$
    this.screenLevel$.pipe(distinctUntilChanged(), debounceTime(200)).subscribe(this.resizeMarsonryObserver)
  }
}
