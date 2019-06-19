import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core'

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
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
