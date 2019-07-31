import { Injectable } from '@angular/core'
import { LANG_CN } from '../mock-datas/i18n.CN'
import { LANG_EN } from '../mock-datas/i18n.EN'
import { LANG_JP } from '../mock-datas/i18n.JP'

export const LANGUAGE = {
    CN: 'cn',
    EN: 'en',
    JP: 'jp'
}
export class Lang {
    FAIL_TO_SUBMIT: string
    FAIL_TO_REACH: string
}

@Injectable()
export class LangService {

    constructor() {
    }

    getLang(language: string): Lang {
        switch (language) {
            case LANGUAGE.CN: return LANG_CN
            case LANGUAGE.EN: return LANG_EN
            case LANGUAGE.JP: return LANG_JP
            default: return LANG_CN
        }
    }

}




