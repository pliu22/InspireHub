import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  webview {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }
`;

export default function ChatGPTWeb() {
  // webviewDom
  let webviewRef = useRef<any>(null);

  useEffect(() => {
    webviewRef.current.addEventListener("did-fail-load", (error: Error) => {
      console.log(error);
    });
    webviewRef.current.addEventListener("did-finish-load", () => {
      console.log("loaded");
    });
  });

  return (
    <Container>
      <webview ref={webviewRef} src="https://chat.openai.com/"></webview>
    </Container>
  );
}
