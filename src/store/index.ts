import Store from 'electron-store'

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
    return data;
}
//=> '🦄'

// setTimeout(() => {
// store.delete('user.customSetting');
// console.log(store.get('unicorn'));
// }, 1000);
//=> undefined

module.exports = {
    getUserSetting
}