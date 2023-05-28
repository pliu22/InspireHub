import { useEffect } from "react";
import styled from "styled-components";
import { getMOdelList } from "../../../api/chatGPT";

const Container = styled.div`

`;

export default function Setting() {
    useEffect(() => {
        getMOdelList().then(res => {
            console.log(res)
        })
    },[])
    return (
       <Container>
        Setting
       </Container>
    )
}