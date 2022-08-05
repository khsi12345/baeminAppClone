import styled from "styled-components";

const items = ["밥이 보약", "한국인은 밤심", "밥은 먹고 다니니" , "그래도 식사는 챙겨드세요", "밥심은 국력이다"]

function DoGift() {
    return (
        <Container>
            <div className=" overflow-hidden overflow-x-scroll whitespace-nowrap">
                {
                    items.map((item) => {
                        return (
                            <Item>
                                <div className="thumbnail"></div>
                                <p className="mt-1 truncate">{item}</p>
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
    width: 140px;
    height: 200px;

    .thumbnail {
        width: 100%;
        height: 90%;
        background-color: hotpink;
        border-radius: 10px;
    }

    &+& {
        margin-left: 0.5rem;
    }
    &:last-child {
        margin-right: 16px;
    }
`;

export default DoGift;