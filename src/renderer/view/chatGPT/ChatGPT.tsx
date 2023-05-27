import { Button, Input, Space } from "antd";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { chatModel } from "./model";
import { postDefalutChat, defalutChatMsgModel } from "../../../api/chatGPT";

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  .chatBox {
    position: fixed;
    bottom: 30px;
    left: calc(50% - 275px + 150px);
  }
`;

const ChatBox = styled.div`
  font-size: 20px;
  height: 100%;
  width: 100%;
  overflow-y: visible;
  div {
    padding: 10px;
  }
`;

export default function ChatGPT() {
  const [chatList, setChatList] = useState<chatModel[]>([]);
  const [textValue, setTextValue] = useState<string>("");
  async function submitQuestion() {
    let newChatList = [...chatList];
    newChatList.push({
      key: newChatList.length,
      status: "pending",
      question: {
        content: textValue,
      },
      answer: {
        content: ".",
      },
    });
    const currentIndex = newChatList.length - 1;
    setChatList(newChatList);
    setTextValue("");
    try {
      const res = await postDefalutChat(parseChatList(newChatList));
      if (res.status !== 200) {
        newChatList[currentIndex].status = "error";
        newChatList[currentIndex].answer.content = "网络错误";
        setChatList(newChatList);
        return;
      }
      newChatList[currentIndex].status = "done";
      console.log(res.data);
      newChatList[currentIndex].answer.content =
        res.data?.choices[0]?.message.content || "暂无回复";
      setChatList(newChatList);
    } catch (error) {
      newChatList[currentIndex].status = "error";
      newChatList[currentIndex].answer.content = "出现错误";
      setChatList(newChatList);
      console.log("catch error: ", error);
    }
  }
  // parse the chatList
  function parseChatList(currentChatList: chatModel[]): defalutChatMsgModel[] {
    const arr = currentChatList.reduce<defalutChatMsgModel[]>((pre, cur) => {
      console.log(cur);
      if (cur.status === "pending") {
        return [
          ...pre,
          {
            role: "user",
            content: cur.question?.content,
          },
        ];
      }
      return [
        ...pre,
        {
          role: "user",
          content: cur.question?.content,
        },
        {
          role: "assistant",
          content: cur.answer?.content,
        },
      ];
    }, []);
    return arr;
  }
  // simulate the answer pending
  useEffect(() => {
    setTimeout(() => {
      if (
        chatList.length === 0 ||
        chatList[chatList.length - 1].status !== "pending"
      ) {
        return;
      }
      let newChatList = [...chatList];
      const currentContent = newChatList[newChatList.length - 1].answer.content;
      newChatList[newChatList.length - 1].answer.content = currentContent + ".";
      if (newChatList[newChatList.length - 1].answer.content.length > 4) {
        newChatList[newChatList.length - 1].answer.content = ".";
      }
      setChatList(newChatList);
    }, 500);
  }, [chatList]);

  return (
    <Container>
      <ChatBox>
        {chatList.map((item) => {
          return (
            <div key={item.key}>
              <div>{item.question?.content}</div>
              <div>{item.answer?.content}</div>
            </div>
          );
        })}
      </ChatBox>

      <Space.Compact className="chatBox" style={{ width: "400px" }}>
        <Input
          placeholder="chat with me."
          value={textValue}
          onChange={(e) => {
            setTextValue(e.currentTarget.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitQuestion();
            }
          }}
          size="large"
        />
        <Button
          type="primary"
          onClick={submitQuestion}
          disabled={textValue === ""}
          size="large"
        >
          提交
        </Button>
      </Space.Compact>
    </Container>
  );
}
