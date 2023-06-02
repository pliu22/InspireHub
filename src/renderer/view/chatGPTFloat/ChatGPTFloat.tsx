import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 98%;
  background-color: #fff;
  webview {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }
  .float-box {
    position: fixed;
    top: 30px;
    right: 50px;
    width: 100px;
    height: 100px;
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    cursor: pointer;
  }
`;

export default function ChatGPTWeb() {
  // webviewDom
  let webviewRef = useRef<any>(null);

  const [showFloatBox, setShowFloatBox] = useState(false);

  const [promptList, setPromptList] = useState<any>();

  useEffect(() => {
    // update userSetting
    const userSetting = JSON.parse(
      window.localStorage.getItem("userSetting") || "{}"
    );
    setPromptList(userSetting?.chatGPT?.prompts);
  }, []);

  useEffect(() => {
    webviewRef.current.addEventListener("did-fail-load", (error: Error) => {
      console.log(error);
    });
    webviewRef.current.addEventListener("did-finish-load", (event: any) => {
      console.log("loaded", event);
      // webviewRef.current.openDevTools();
      webviewRef.current.addEventListener("ipc-message", (event: any) => {
        console.log("ipc-message", event);
        // Prints "xxxx"
      });
      setShowFloatBox(true);
    });
  });

  function assemblePrompt() {
    webviewRef.current.send("assemblePrompt", promptList[0].value);
    console.log("assemblePrompt 1");
  }

  return (
    <Container>
      {showFloatBox && (
        <div className="float-box" onClick={assemblePrompt}>
          翻译官
        </div>
      )}
      <webview
        nodeintegration
        ref={webviewRef}
        src="https://chat.openai.com/"
      ></webview>
    </Container>
  );
}
