import { Fragment } from "react";
import styled from "styled-components";
import {FaRegHeart} from "react-icons/fa"
import {FaParking} from "react-icons/fa"
import {BiGift} from "react-icons/bi"
import {TbLicense} from "react-icons/tb"

function DirectAction() {
    return(
        <Fragment>
            <Container>
                <InnerItem>
                    <div>
                        <p>{<FaParking/>}</p>
                        포인트
                    </div>
                </InnerItem>
                <InnerItem>
                    <div>
                        <p>{<TbLicense/>}</p>
                        쿠폰함
                    </div>
                </InnerItem>
                <InnerItem>
                    <div>
                        <p>{<BiGift/>}</p>
                        선물함
                    </div>
                </InnerItem>
                <InnerItem>
                    <div>
                        <p>{<FaRegHeart/>}</p>
                        찜
                    </div>
                </InnerItem>
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
`;

const InnerItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25%;
    &+& {
        border-left: 1px solid rgb(237, 231, 230);
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export default DirectAction;