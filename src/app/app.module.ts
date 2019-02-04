import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material'
import { AppComponent } from './app.component'
import { ScreenService } from './service/screen.service'
import { BlogPageComponent } from './blog-page/blog-page.component'
import { AppRoutingModule } from './app-routing.module'
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common'
import { SquareComponent } from './square/square.component'
import { ScrollDispatchModule } from '@angular/cdk/scrolling'
import { HttpClientModule } from '@angular/common/http'
import { LangService } from './service/lang.service'
@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    SquareComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,

    MatSortModule,
    ScrollDispatchModule,

    AppRoutingModule
  ],
  providers: [{
    // 路由方式：/#/xxx LocationStrategy
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
    LangService,
    ScreenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
