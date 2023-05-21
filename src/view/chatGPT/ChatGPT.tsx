import { Button, Input, Space } from "antd";
import { useState } from "react";
import styled from 'styled-components'

const Container = styled.div` 

`

export default function ChatGPT() {
  const [chatList, setChatList] = useState([]);

  return (
    <Container>
      {chatList.map((item, index) => {
        return <div key={index}>{item}</div>;
      })}
      
      <Space.Compact style={{ width: "100%" }}>
        <Input placeholder="chat with me."/>
        <Button type="primary">Submit</Button>
      </Space.Compact>
    </Container>
  );
}
