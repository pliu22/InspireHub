import axios from "axios";

export const baseInstance = axios.create({
    timeout: 10000
});
