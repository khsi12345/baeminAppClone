import Masonry from 'react-masonry-css'
import styled from 'styled-components'

const items = [
    {
        "url": "https://file.mk.co.kr/meet/neds/2016/11/image_readtop_2016_776001_14785280932673899.jpg",
        "des": "다정한 식당 이야기"
    },
    {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4mtYnZBG_nA25NdXtBx7AFthtIaUMcQlkQw&usqp=CAU",
        "des": "백종원의 다정한 식당 이야기"
    },
    {
        "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIAFAQZUtObH38yw1IxO_Vy6jcRsx_5cyoEA&usqp=CAU",
        "des": "사장님, 풍수해보험 무료로 신청하세요!"
    },
    {
        "url": "https://i.ytimg.com/vi/s58gm03nPgE/maxresdefault.jpg",
        "des": "배달의 민족은 배달하지 않는다"
    }
]

function DoThis() {
    return(
        <Container>
                {
                    items.map((item) => {
                        return (
                            <Item>
                                <div>
                                    <img src={item.url} alt={item.des}/>
                                </div>
                                <figcaption>{item.des}</figcaption>
                            </Item>
                        )
                    })
                }
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-flow: wrap;
    justify-content: space-between;
    /* align-items: flex-end; */
    padding: 0 16px;
`;

const Item = styled.figure`
    display: inline-block;
    margin-bottom: 15px;
    width: 45%;
    height: min-content;
`;

export default DoThis;