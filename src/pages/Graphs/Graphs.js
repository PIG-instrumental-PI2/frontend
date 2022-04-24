import { Heading,Container } from "../../styles/Pages.styled";
import styled from "styled-components";
import { ReturnButton } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Graphs()
{
    const navigate = useNavigate();
    return (
        <Container>
            <TitleWrapper>
                <div>
                    <ReturnButton onClick={()=> navigate(-1)}/>
                </div>
                <StyledHeading>Gráficos</StyledHeading>
            </TitleWrapper>
        </Container>
    );
}

const StyledHeading = styled(Heading)`
    text-align:center;
`

const TitleWrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 2fr 1fr;
    
    & > div{
        display:flex;
        align-items:center;
    }
`


export default Graphs;