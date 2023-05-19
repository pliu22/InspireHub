import { createBrowserRouter } from "react-router-dom";
import  ChatGPT  from "../view/chatGPT/ChatGPT";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <ChatGPT/>,
    },
]);