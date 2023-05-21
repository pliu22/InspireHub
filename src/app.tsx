import ReactDOM from "react-dom/client";
import {  } from "antd";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Routers from "./router/router";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() {
  const [current, setCurrent] = useState("chatGPT");
  useEffect(() => {
    // nav('/chatGPT')
  }, [current]);
  return (
    <Container>
      <Routers />
    </Container>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
