import { Fragment } from "react";
import styled from "styled-components";
import OrderItem from "./OrderItem";

function RecentOrder() {
    return (
        <div className="mx-4">
            <div className="flex">
                <OrderItem starRating="5.0" storeName="교촌치킨 봉천1호점" tagItems="위생인증"/>
                <OrderItem starRating="4.8" storeName="깻잎두마리치킨 태평점" tagItems="쿠폰"/>
            </div>
            <Ad>
                계좌 등록만 해도 최대 3만원!
            </Ad>
        </div>
    )
}

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