import { Button, Input, Space } from "antd";
import { useState } from "react";

export default function ChatGPT() {
  const [chatList, setChatList] = useState([]);

  return (
    <>
      {chatList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      
      <Space.Compact style={{ width: "100%" }}>
        <Input placeholder="chat with me."/>
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </>
  );
}
