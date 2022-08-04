import styled from "styled-components";
import { BiChevronRight } from "react-icons/bi";

function SectionContainer({title, viewText, children}) {
    return (
        <Container>
            <div className="flex justify-between mb-3 mx-4">
            <span>{title}</span>
            <div className="flex items-center">
            <span>{viewText}</span>
            <span className="w-2">
                {<BiChevronRight/>}
            </span>
            </div>
            </div>
            <div >
            {children}
            </div>
        </Container>
    )
}

const Container = styled.section`
    margin-bottom: 0.625rem;
    padding: 14px 0px;
    width: 100%;
    background-color: #fff;
`;

export default SectionContainer;