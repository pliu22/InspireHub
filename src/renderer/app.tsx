import ReactDOM from "react-dom/client";
import styled from "styled-components";
import Routers from "./router/router";
import ChatGPTFloat from "./view/chatGPTFloat/ChatGPTFloat";


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

function App() { 
  console.log(window.location.pathname)
  if(window.location.pathname === '/gptFloat'){
    return <ChatGPTFloat/>
  }
  return (
    <Container>
       <Routers /> 
    </Container>
  );
}
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
