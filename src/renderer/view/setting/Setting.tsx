import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 24px;
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
            <>
              <div>{item.name}</div>
              <div>{item.value}</div>
            </>
          );
        })}
      </div>
    </Container>
  );
}
