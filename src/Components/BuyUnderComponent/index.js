import { Fragment } from "react";
import styled from "styled-components";

function BuyUnderComponent({content}) {
    return (
        <Fragment>
            <Button className=" w-1/4 h-16 bg-white">
                {content}
            </Button>
        </Fragment>
    )
}

const Button = styled.button`
    width: 33.33%;
    &+& {
        margin-left: 10px;
    }
    border-radius: 0.86rem;
`;

export default BuyUnderComponent;