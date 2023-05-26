import axios from "axios";
import { proxy } from "../../.electron-config/config.json";

export const baseInstance = axios.create({
    timeout: 60000,
    proxy: {
        host: proxy.host,
        port: proxy.port
    }
});
