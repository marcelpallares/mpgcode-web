import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: none !important;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #292929;
    margin: 0.6em 0;
  }

  h1 {
    font-size: 46px;
    line-height: 56px;
    letter-spacing: -0.011em;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 32px;
      line-height: 40px;
      letter-spacing: -0.016em;
    }
  }

  h2 {
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.014em;
    font-weight: 700;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 28px;
      letter-spacing: 0;
    }
  }

  h3 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 22px;
      line-height: 28px;
    }
  }

  h4 {
    font-size: 26px;
    line-height: 32px;
    font-weight: 500;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  h5 {
    font-size: 22px;
    line-height: 28px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
  }

  h6 {
    font-size: 21px;
    line-height: 27px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  #nprogress .spinner {
    display: none !important;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.accent} !important;
  }
`;

export { GlobalStyle };
