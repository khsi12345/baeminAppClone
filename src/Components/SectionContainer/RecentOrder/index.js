import { Fragment } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

function RecentOrder() {
    return (
        <Container>
            <div className=" overflow-hidden whitespace-nowrap overflow-x-scroll">
                <OrderItem starRating="5.0" storeName="교촌치킨 봉천1호점" tagItems="위생인증"/>
                <OrderItem starRating="4.8" storeName="깻잎두마리치킨 태평점" tagItems="쿠폰"/>
                <OrderItem starRating="4.0" storeName="도미노피자 관악점" tagItems="쿠폰"/>
                <OrderItem starRating="4.2" storeName="네네치킨 송파점" tagItems="위생인증"/>
                <OrderItem starRating="4.9" storeName="비비큐치킨 서울대입구점" tagItems="쿠폰"/>
            </div>
            <Ad>
                계좌 등록만 해도 최대 3만원!
            </Ad>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-left: 16px;
`;

const Ad = styled.div`
    display: flex;
    align-items: center;
    margin-top: 4.375rem;
    padding-left: 10px;
    width: 100%;
    height: 50px;
    background-color: whitesmoke;
    border-radius: 8px;
`;

export default RecentOrder;