import * as _ from 'lodash'
import { v4 as uuidv4 } from 'uuid';
import Md5 from "crypto-js/md5";
export class UtilsPlugin {
    public $_: _.LoDashStatic = _

    public uuidv4() {
        return uuidv4()
    }


    public getImageUrl(path: string, extension: string) {
        return `${path}/portrait_fantastic.${extension}`
    }
    public getSlug(str: string) {
        let titleStr = str.replace(/^\s+|\s+$/g, '');
        titleStr = titleStr.toLowerCase();
        //persian support
        titleStr = titleStr.replace(/[^a-z0-9_\s-ءاأإآؤئبتثجحخدذرزسشصضطظعغفقكلمنهويةى]#u/, '')
            // Collapse whitespace and replace by -
            .replace(/\s+/g, '-')
            // Collapse dashes
            .replace(/-+/g, '-');
        titleStr = titleStr;
        return titleStr;
    }
    public getHash(ts: string, privateKey: string, publicKey: string) {
        return Md5(ts + privateKey + publicKey).toString();
    }
}


export default defineNuxtPlugin(nuxtApp => {
    // nuxtApp.provide('utils', new UtilsPlugin())
    nuxtApp.provide('utils', new UtilsPlugin())
})
