import {
  forwardRef,
  useEffect,
  useRef,
  useState,
  useImperativeHandle,
} from "react";
import styled from "styled-components";

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
    right: 10px;
    width: 150px;
    max-height: 150px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px #ccc;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    div {
      width: 100%;
      color: #202123;
      cursor: pointer;
      text-align: center;
      margin: 4px 0;
      font-size: 12px;
      font-weight: 600;
      transition: .3s;
    }
    div:hover {
      transform: scale(1.1);
    }
    div:not(:last-child):after {
      content: "";
      display: block;
      width: 100%;
      height: 1px;
      background-color: #ccc;
      transform: translateY(4px);
    }
  }
`;

export const ChatGPTWeb = forwardRef((props, ref) => {
  // webviewDom
  let webviewRef = useRef<any>(null);

  const [showFloatBox, setShowFloatBox] = useState(false);

  const [promptList, setPromptList] = useState<any>();

  // load userSetting
  useEffect(() => {
    updateUserSetting();
  }, []);

  // update userSetting
  const updateUserSetting = () => {
    console.log("updateUserSetting");
    const userSetting = JSON.parse(
      window.localStorage.getItem("userSetting") || "{}"
    );
    setPromptList(userSetting?.chatGPT?.prompts);
  };

  useImperativeHandle(ref, () => ({ updateUserSetting }));

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

  function assemblePrompt(value?: string) {
    webviewRef.current.send("assemblePrompt", value);
    console.log("assemblePrompt 1");
  }

  return (
    <Container>
      {showFloatBox && (
        <div className="float-box" >
          {promptList.map((item: any) => {
            return <div onClick={
              () => {
                assemblePrompt(item.value);
              }
            } >{item.name}</div>;
          })}
        </div>
      )}
      <webview
        nodeintegration
        ref={webviewRef}
        src="https://chat.openai.com/"
      ></webview>
    </Container>
  );
});
