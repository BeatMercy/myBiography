import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScreenService {
    screenLevel$ = new BehaviorSubject(2);
    tabletScreen: MediaQueryList;
    mobileScreen: MediaQueryList;
    screenInterval = setInterval(() => {
        this.screenLevel$.subscribe();
    }, 100);
    constructor(media: MediaMatcher) {
        this.tabletScreen = media.matchMedia('screen and (max-width:768px)');
        this.mobileScreen = media.matchMedia('screen and (max-width:480px)');
        this.mobileScreen.addListener((next) => {
            if (!this.tabletScreen.matches && !next.matches) {
                this.screenLevel$.next(2);
            } else if (this.tabletScreen.matches && !next.matches) {
                this.screenLevel$.next(1);
            } else {
                this.screenLevel$.next(0);
            }
        });
        this.tabletScreen.addListener((next) => {
            if (!this.mobileScreen.matches && !next.matches) {
                this.screenLevel$.next(2);
            } else if (!this.mobileScreen.matches && next.matches) {
                this.screenLevel$.next(1);
            } else {
                this.screenLevel$.next(0);
            }
        });
        if (this.mobileScreen.matches) {
            this.screenLevel$.next(0);
        } else if (this.tabletScreen.matches) {
            this.screenLevel$.next(1);
        }
    }

    defaultScreenLevelSubscribe(): void {
        this.screenLevelSubscribe(5000);
    }
    screenLevelSubscribe(sustain: number): void {
        this.screenInterval = setInterval(() => {
            this.screenLevel$.subscribe();
        }, 100);
        setTimeout(() => {
            console.log('screen resize');
            clearInterval(this.screenInterval);
        }, sustain);
    }

    getScreenLevel() {
        return this.screenLevel$.getValue();
    }

    isTablet() {
        return !this.tabletScreen.matches && !this.mobileScreen.matches;
    }
    isDesktop() {
        return !this.tabletScreen.matches && !this.mobileScreen.matches;
    }
}
