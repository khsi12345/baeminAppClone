import styled from "styled-components";
import {TbChevronDown} from "react-icons/tb";
import {TbChevronUp} from "react-icons/tb";
import { useState } from "react";

function Footer() {
    const [toggle, setToggle] = useState(false);

    const infoToggleHandler = () => {
        console.log("cldick")
        setToggle((prev) => !prev)
    }

    return (
        <Container>
        <TopInfo>
            <li>사업자정보확인</li>
            <li>이용약관</li>
            <li>전자금융거래이용약관</li>
            <li>개인정보처리방침</li>
        </TopInfo>
        <div className="mb-1 flex" onClick={infoToggleHandler}>
            <span className=" text-xs">(주)우아한형제들</span>
            {
                toggle ? <i><TbChevronUp/></i> :
                        <i><TbChevronDown/></i>
            }
        </div>
        {
            toggle ? 
            <HideInfo>
            <div>
                <span>대표이사 김범준</span>
                <span>사업자등록번호 120-87-65763</span>
            </div>
            <div>
                <span>통신판매업 서울 송파-0515</span>
                <span>호스팅서비스제공자 (주)우아햔형제들</span>
            </div>
            <div>
                <span>woowahan.com</span>
                <span>서울특별시 송파구 위례성대로 2 장은빌딩</span>
            </div>
            <p>전자금융분쟁처리 Tel 1600-0987(유료), 080-849-0987(무료)</p>
            <p>Fax 050-6050-0400</p>
            <div className="box-info flex">
                <div className="w-1/2">
                    <p>고객센터(대표)</p>
                    <p>1600-0987</p>
                    <p>24시간 운영, 연중무휴</p>
                </div>
                <div className="w-1/2">
                    <p>고객센터(B마트/배민스토어)</p>
                    <p>1600-0025</p>
                    <p>오전 09:00~익일 새벽 01:00</p>
                </div>
            </div>
        </HideInfo> :
        <></>
        }
       
        <div>
            (주)우아한형제들은 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 따라서 (주)우아한형제들은 상품, 거래정보 및 거래에 대하여 책임을 지지 않습니다.
        </div>
        </Container>
    )
}

const Container = styled.footer`
    padding: 0 16px;
    padding-bottom: 16px;

    div {
        &:last-child {
            font-size: 10px;
        }
    }
`;
const TopInfo = styled.ul`
    margin: 12px 0;

    li {
        display: inline-block;
        padding: 0 6px;
        font-size: 11px;
        &:first-child {
            padding-left: 0;
        }
    }
    li+li {
            border-left: 1px solid black;
        }
`;

const HideInfo = styled.div`
    font-size: 10px;
    .box-info {
        margin: 12px 0;
        padding: 0 12px;
        border: 1px solid grey;
        border-radius: 0.25rem;

        div{
            &:first-child {
                padding: 12px 0;
                border-right: 1px solid grey;
            }
            &:last-child {
                padding: 12px 0px 12px 12px;
            }
        }
    }
`;

export default Footer;