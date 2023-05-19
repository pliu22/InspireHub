import { baseInstance } from "./request";
import { chatGPT, proxy } from "../config/config.json";

type defalutChatMsgModel = {
    role: string,
    content: string,
}

export function postDefalutChat(messages: defalutChatMsgModel[]) {
    baseInstance.post("https://api.openai.com/v1/chat/completions",{
        model: "gpt-3.5-turbo",
        messages,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer $OPENAI_API_KEY" + chatGPT.auth.apikey
        },
        proxy: {
            host: proxy.host,
            port: proxy.port
        }
    });
}

