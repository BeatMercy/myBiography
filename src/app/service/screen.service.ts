import { Injectable } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScreenService {
    screenLevel$ = new BehaviorSubject(2);

    constructor(media: MediaMatcher) {
        const tabletScreen = media.matchMedia('screen and (max-width:768px)');
        const mobileScreen = media.matchMedia('screen and (max-width:480px)');
        mobileScreen.addListener((next) => {
            if (!tabletScreen.matches && !next.matches) {
                this.screenLevel$.next(2);
            } else if (!tabletScreen.matches && next.matches) {
                this.screenLevel$.next(1);
            } else {
                this.screenLevel$.next(0);
            }
        });
        tabletScreen.addListener((next) => {
            if (!mobileScreen.matches && !next.matches) {
                this.screenLevel$.next(2);
            } else if (!mobileScreen.matches && next.matches) {
                this.screenLevel$.next(1);
            } else {
                this.screenLevel$.next(0);
            }
        });
        if (mobileScreen.matches) {
            this.screenLevel$.next(0);
        } else if (tabletScreen.matches) {
            this.screenLevel$.next(1);
        }
    }

    getScreenLevel() {
        return this.screenLevel$.getValue();
    }

    xxx(num: number) {
        console.log(`${this.getScreenLevel()} - num: ${num}`)
        switch (this.getScreenLevel()) {
            case 0: return 1 > num;
            case 1: return 3 > num;
            case 2: return 5 > num;
            default: return 5 > num;
        }
    }
}