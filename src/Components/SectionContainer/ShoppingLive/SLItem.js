import styled from "styled-components";

function SLItem({viewer, tag, keyword, subKeyword, per, pay}) {
    return (
        <ItemBox>
            <div className="thumbnail">
                <div></div>
                <div className=" relative h-full overflow-hidden">
                <span className=" inline-flex p-1 bg-zinc-400 rounded-sm">{viewer}</span>
                <div className="absolute  bottom-0">
                    <span className="tag rounded-sm">{tag}</span>
                    <p>{keyword}</p>
                </div>
                </div>
            </div>
            <div className="info mt-3">
                <div className=" w-1/3 h-14 bg-red-300 rounded-md mr-2"></div>
                <dl className=" w-3/5">
                    <dt className="subKeyword h-9 truncate">{subKeyword}</dt>
                    <dd>
                        <span className=" mr-1 text-red-500">{per}</span>
                        <span className=" font-bold">{pay}</span>
                    </dd>
                </dl>
            </div>
        </ItemBox>
    )
}

const ItemBox = styled.div`
    display: inline-block;
    padding: 0.625rem;
    width: 200px;
    &+&{
        margin-left: 1.25rem;
    }
    
    .thumbnail {
        padding: 12px;
        width: 100%;
        height: 200px;
        background-color: aquamarine;
        
        .tag {
            border: 1px solid orange;
        }
    }

    .info {
        display: flex;
        width: 100%;

        .subKeyword {
            display: -webkit-box;
            font-size: 12px;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: pre-wrap !important;
        }
    }
`;


export default SLItem;