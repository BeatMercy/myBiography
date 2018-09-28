import { BlogPageComponent } from './blog-page/blog-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SquareComponent } from './square/square.component';

const appRoutes = [
    { path: '', component: SquareComponent },
    { path: 'blog/:id', component: BlogPageComponent },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true,
                scrollPositionRestoration: 'enabled'
            } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
