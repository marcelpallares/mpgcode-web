import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.white};
  margin: 0;
  font-size: 36px;
  line-height: 44px;
  letter-spacing: -0.014em;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 0;
  }
`;

const Subtitle = styled.h2`
  color: ${(props) => props.theme.white};
  margin: 0;
  margin-top: 1rem;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const HeaderContainer = styled.div`
  display: block;
  justify-content: center;
  align-items: center;
  padding: 3em;
  box-sizing: border-box;
  margin-top: -36px;
  background-color: ${(props) => props.theme.primary};

  .container {
    max-width: 850px !important;
  }

  @media (max-width: 768px) {
    padding: 2em;
    margin-top: -20px;
  }
`;

export { HeaderContainer, Title, Subtitle };
