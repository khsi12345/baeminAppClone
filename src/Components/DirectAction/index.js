import { Fragment } from "react";
import styled from "styled-components";

function DirectAction() {
    return(
        <Fragment>
            <Container>
                <InnerItem>포인트</InnerItem>
                <InnerItem>쿠폰함</InnerItem>
                <InnerItem>선물함</InnerItem>
                <InnerItem>찜</InnerItem>
            </Container>
        </Fragment>
    )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 6px #aaa
`;

const InnerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    &+& {
        border-left: 1px solid rgb(237, 231, 230);
    }
`;

export default DirectAction;