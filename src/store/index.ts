import Store from 'electron-store'
import defalutSetting from './defalutSetting.json'
import { ConfigModel } from './model'

const store = new Store();

// store.set('user.customSetting', {
//     "chatGPT": {
//         "auth": {
//             "apikey": "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"
//         }
//     },
//     "proxy": {
//         "host": "http://127.0.0.1",
//         "port": 1080
//     }    
// });

export function getUserSetting() {
    const data = store.get('user.customSetting')
    if(!data) {
        store.set('user.customSetting', defalutSetting)
        return defalutSetting
    }
    return data;
}

export function setUserSetting(data: ConfigModel) {
    store.set('user.customSetting', data)
}

module.exports = {
    getUserSetting
}