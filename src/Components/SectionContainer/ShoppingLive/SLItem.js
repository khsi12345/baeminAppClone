import styled from "styled-components";

function SLItem({viewer, tag, keyword, subKeyword, per, pay}) {
    return (
        <ItemBox>
            <div className="thumbnail">
                <span>{viewer}</span>
            </div>
            <div className="info">
                <div></div>
                <div>
                    <div>{subKeyword}</div>
                    <div>
                        <span>{per}</span>
                        <span>{pay}</span>
                    </div>
                </div>
            </div>
        </ItemBox>
    )
}

const ItemBox = styled.div`
    display: inline-block;
    padding: 0.625rem;
    width: 150px;
    &+&{
        margin-left: 1.25rem;
    }

    .thumbnail {
        width: 100%;
    }

    .info {
        width: 100%;
    }
`;


export default SLItem;