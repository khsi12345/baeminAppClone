import { Fragment } from "react";
import styled from "styled-components";
import SLItem from "./SLItem";

const items = [
    {
        "viewer" : "1,867",
        "tag" : "LIVE특가",
        "keyword" : "22년 처서 출하 활새우 최대 31% 할인",
        "subKeyword" : "[산지직송] 전남 하의도 당일 어획!........",
        "per": "33%",
        "pay": "17,900원",
    },
    {
        "viewer" : "15,687",
        "tag" : "기간한정특가",
        "keyword" : "와룡막창 인기상품 최대 12% 할인중!",
        "subKeyword" : "[와룡] 초벌막장(소스포함) / 400g",
        "per": "12%",
        "pay": "13,900원",
    },
    {
        "viewer" : "25,751",
        "tag" : "기간한정특가",
        "keyword" : "물사는날 몽베스트 최대 51% 할인+무료배송!",
        "subKeyword" : "몽베스트 생수 / 2L x 12병 (총12병)",
        "per": "14%",
        "pay": "8,500원",
    },
    {
        "viewer" : "294,751",
        "tag" : "기간한정특가",
        "keyword" : "교촌치킨 신메뉴 3천원 할인!",
        "subKeyword" : "교촌치킨 메뉴 상품권 / 20,000원",
        "per": "15%",
        "pay": "17,000원",
    },
    {
        "viewer" : "81,211",
        "tag" : "기간한정특가",
        "keyword" : "1등급 한우꽃등심 2인분에 1만워너 대!",
        "subKeyword" : "[추천] 1등급 한우꽃등심 2인분(냉면...............)",
        "per": "34%",
        "pay": "18,900원",
    },

]

function ShoppingLive() {
    return (
        <Container>
        <div className="overflow-hidden whitespace-nowrap overflow-x-scroll">
            {
                items.map((item, i) => {
                    return (
                        <SLItem 
                        key={`${i} ${item.keyword}`}
                        viewer={item.viewer}
                        tag={item.tag}
                        keyword={item.keyword}
                        subKeyword={item.subKeyword}
                        per={item.per}
                        pay={item.pay}
                        />
                        )
                    })
                }
        </div>
        </Container>
    )
}

const Container = styled.div`
    overflow-x: hidden;
    scrollbar-width: unset;
`;

export default ShoppingLive;