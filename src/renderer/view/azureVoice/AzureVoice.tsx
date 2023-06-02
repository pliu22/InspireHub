import { Result } from "antd";
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export function AzureVoice() {
  return (
    <Container>
      <Result status="warning" title="该页面尚未完成" />
    </Container>
  );
}
