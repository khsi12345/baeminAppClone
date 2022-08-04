import styled from "styled-components";

function BuyComponent({title, content}) {
    return (
        <Button>
            <div className="absolute top-0 left-0  ">
                <div className="flex pt-2 pl-3 text-3xl font-extrabold">{title}</div>
                <div className="pt-2 pl-3 text-gray-600">{content}</div>
            </div>
        </Button>
    )
}

const Button = styled.button`
    position: relative;
    display: inline-block;
    width: 48%;
    height: 11rem;
    background-color: #fff;
    border-radius: 0.75rem;
`;

export default BuyComponent;