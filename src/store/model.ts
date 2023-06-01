export interface ConfigModel {
    chatGPT: {
        auth: {
            apikey: string
        },
        propts: {
            name: string
            value: string
        }[]
    },
    proxy: {
        host: string
        port: number
    }
}