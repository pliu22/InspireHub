import { baseInstance } from "./request";
import { chatGPT } from "../../.electron-config/config.json";

export type defalutChatMsgModel = {
    role: 'user' | 'system' | 'assistant',
    content: string,
}

export async function postDefalutChat(messages: defalutChatMsgModel[]) {
    const res = await baseInstance.post("https://api.openai.com/v1/chat/completions",{
        model: "gpt-3.5-turbo",
        messages,
    }, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chatGPT.auth.apikey
        },
    });
    return res;
}

export async function getMOdelList() {
    const res = await baseInstance.get("https://api.openai.com/v1/models", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + chatGPT.auth.apikey
        },
    });
    return res;
}
