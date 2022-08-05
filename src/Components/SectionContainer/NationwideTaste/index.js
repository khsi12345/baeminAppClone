import styled from "styled-components";

const items = [
    {
        "location": "경기",
        "storeName": "매일식품",
        "des": 
            <>
            <p>어머니의 손맛을</p>
            <p>그대로 담았어요</p>
            </>
        ,
    },
    {
        "location": "서울",
        "storeName": "송주불냉면",
        "des": 
            <>
                <p>내 맘대로 만들어 먹는</p>
                <p>매콤한 냉면</p>
            </>
    },
    {
        "location": "경남",
        "storeName": "남해중현떡집",
        "des":
            <p>재료 본연의 맛을 담았어요</p>
      ,
    },
    {
        "location": "광주",
        "storeName": "감동",
        "des": 
            <>
                <p>신선한 산지</p>
                <p>농산물의 달콤한 맛</p>
            </>
       ,
    },
    {
        "location": "경기",
        "storeName": "신호닭발",
        "des": 
            <>
                <p>직화 향기 가득</p>
                <p>매콤한 닭발</p>
            </>
        ,
    },
    {
        "location": "경북",
        "storeName": "다농이네",
        "des": 
            <>
                <p>제철 농산물과</p>
                <p>신선한 먹거리</p>
            </>
        ,
    }
]
function NationwideTaste() {
    return (
        <Container>
            <div className=" inner overflow-hidden overflow-x-scroll whitespace-nowrap">
                {
                    items.map((item) => {
                        return (
                            <Item>
                                <div className="flex items-end h-full">
                                    <div className="">
                                        <p>{item.location}</p>
                                        <p className=" font-semibold">{item.storeName}</p>
                                        <div className=" font-light text-xs">{item.des}</div>
                                    </div>
                                </div>
                            </Item>
                        )
                    })
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    padding-left: 16px;
`;


const Item = styled.div`
    display: inline-block;
    vertical-align: middle;
    padding-left: 22px;
    padding-bottom: 22px;
    width: 200px;
    height: 200px;
    border-radius: 8px;
    background-color: rgba(255, 134, 158, 0.3);

    &+& {
        margin-left: 0.5rem;
    }
    &:last-child {
        margin-right: 16px;
    }
`;

export default NationwideTaste;