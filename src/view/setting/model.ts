export interface userCustomSettingModel {
    chatGPT: {
        auth: {
            apikey: string
        }
    },
    proxy: {
        host: string
        port: number
    }

}