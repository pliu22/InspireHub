import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { SetInputValue } from "../../script/chatGptWeb";

const Container = styled.div`
  width: 100%;
  height: 100%;
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
    border-radius: 50%;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export default function ChatGPTWeb() {

  // webviewDom
  let webviewRef = useRef<any>(null);

  const [showFloatBox, setShowFloatBox] = useState(false)

  useEffect(() => {
    webviewRef.current.addEventListener("did-fail-load", (error: Error) => {
      console.log(error);
    });
    webviewRef.current.addEventListener("did-finish-load", () => {
      console.log("loaded");
      setShowFloatBox(true)
    });
  });

  return (
    <Container>
      {showFloatBox && <div className="float-box" onClick={() => SetInputValue("你现在是一个小猫")}>悬浮框</div>}
      <webview ref={webviewRef} src="https://chat.openai.com/"></webview>
    </Container>
  );
}
