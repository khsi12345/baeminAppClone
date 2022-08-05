import styled from "styled-components";

const saleItems = [
    "투존치킨", "빕스", "도미노피자", "에그슬럿", "빅스타피자", "오지버거", "피자헛", "일미리 금계찜닭", "치킨마루", "치킨더홈"
]

function TodaySale() {
    return (
        <Container>
            <div className="overflow-hidden whitespace-nowrap overflow-x-scroll">

            {
                saleItems.map((item) => {
                    return (
                        <SaleItem>{item}</SaleItem>
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
    overflow-x: hidden;
    scrollbar-width: unset;
`;


const SaleItem = styled.div`
    display: inline-block;
    padding: 0.75rem;
    width: 17.5rem;
    height: 7.5rem;
    border: 2px solid whitesmoke;
    border-radius: 0.625rem;
    &+& {
        margin-left: 0.5rem;
    }
    &:last-child {
        margin-right: 16px;
    }
`;

export default TodaySale;