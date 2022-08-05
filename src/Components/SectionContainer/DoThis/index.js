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
    const itemComponent = items.map((item) => {
        return (
            <div>
                <div>
                    <img src={item.url} alt={item.des}/>
                </div>
                <p>{item.des}</p>
            </div>
        )
    })
    return(
        <Container>
            <Masonry 
            breakpointCols={2} 
            className="masonry-grid"
            columnClassName="masonry-grid-column"
            >
                {itemComponent}
            </Masonry>
        </Container>
    )
}
const Container = styled.div`
    padding: 0 16px;
    .masonry-grid{
        display: flex;
        /* margin-left: 30px; */

        .masonry-grid-column+
        .masonry-grid-column{
            
                margin-left: 16px;
            
        }
    }
   
`;

export default DoThis;