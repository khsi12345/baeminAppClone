import { Fragment, useState } from "react";
import {default as S} from "react-slick";
import styled from "styled-components";
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const items = ["버거킹", "쿠폰드려요", "쿠폰적용 최대49% 할인", "비벼먹는 생곤드레"]

function Slider() {
    const [currentPage, setCurrentPage] = useState(0);

    return (
        <div className=" relative">
            <S
                arrows={false}
                beforeChange={
                    (_, next) => setCurrentPage(next)
                }
            >
                {
                    items.map((item) => {
                        return (
                            <SliderItem key={item}>{item}</SliderItem>
                        )
                    })
                }
            </S>
            <PageDot>
                {`${currentPage + 1} / ${items.length} 모두보기`}
            </PageDot>
        </div>
    )
}

const SliderItem = styled.div`
    height: 4rem;
    border: 1px solid gray;
`;

const PageDot = styled.span`
    position: absolute;
    bottom: 12px;
    right: 12px;
    padding: 4px 8px;
    height: 1.5rem;
    color: white;
    background-color: rgb(62, 63, 64);
    opacity: 0.9;
    font-size: 8px;
    border-radius: 1rem;
    line-height: 1.6;
`;

export default Slider;