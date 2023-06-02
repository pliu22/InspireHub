import { useEffect, useState } from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  height: 100%;
  .setting-title {
    span {
      color: #343541;
      font-size: 30px;
      font-weight: bold;
    }
    // 分割线
    span:after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #66666650;
      margin: 10px 0 16px 0;
      border-radius: 1px;
    }
  }
  .prompts {
    display: flex;
    flex-direction: column;
    .prompt-box {
      background-color: #f7f7f8;
      // 向下的卡片阴影
      box-shadow: 0 2px 8px #66666650;
      border: #66666650 1px solid;
      border-radius: 8px;
      padding: 8px 12px;
      position: relative;
      margin-bottom: 12px;
      div:first-child {
        font-size: 16px;
        font-weight: bold;
        color: #343541;
      }
      button {
        position: absolute;
        top: 8px;
        right: 12px;
      }
    }
  }
  .last-box {
    margin-bottom: 30px;
  }
  .save-btn {
    position: fixed;
    bottom: 20px;
    left: 0;
    width: 50%;
    left: calc(25% + 72px);
  }
`;

export default function Setting() {
  const [userSetting, setuserSetting] = useState<any>();
  useEffect(() => {
    setuserSetting(
      JSON.parse(window.localStorage.getItem("userSetting") || "{}")
    );
  }, []);
  return (
    <Container>
      <div className="setting-title">
        <span>ChatGPT</span>
      </div>
      <div className="prompts">
        {userSetting?.chatGPT?.prompts?.map((item: any) => {
          return (
            <div className="prompt-box">
              <div>{item.name}</div>
              <div>{item.value}</div>
              <Button danger size="small" type="text">
                <DeleteOutlined />
              </Button>
            </div>
          );
        })}
        <Button
          style={{
            margin: "10px 0",
          }}
          block
        >
          添加新模型
        </Button>
      </div>
      <div className="last-box"></div>
      <Button className="save-btn" type="primary" size="large" block>
        保存
      </Button>
    </Container>
  );
}
