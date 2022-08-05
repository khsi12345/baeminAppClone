import styled from "styled-components";
import {FcHighPriority} from "react-icons/fc"

function OrderItem({storeName, starRating, tagItems}) {
    return (
        <ItemBox>
            <div className=" w-full h-32 rounded-md bg-red-300"></div>
            <div className=" flex justify-between w-full mt-3">
                <span className=" inline-block w-2/3 text-xs  truncate">{storeName}</span>
                <span className=" w-3 h-4 mr-1">
                {<FcHighPriority/>}
                </span>
                <span className="text-xs">{starRating}</span>
            </div>
         
                <TagItem>
                    {tagItems}
                </TagItem>
         
        </ItemBox>
    )
}

const ItemBox = styled.div`
    display: inline-block;
    width: 9.375rem;
    &+& {
        margin-left: 1.25rem;
    }
    &:last-child {
        margin-right: 16px;
    }
`;

const TagItem = styled.span`
    font-size: 0.625rem;
`;

export default OrderItem;