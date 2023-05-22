import styled from 'styled-components'

const Container = styled.div` 
 width: 100%;
 height: 100%;
  webview {
    width: 100%;
    height: 100%;
    display: inline-flex;
  }
`

export default function Midjourney() {

  return (
    <Container>
      <webview  src=" http://discord.gg/midjourney"></webview>
    </Container>
  );
}
