import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "../styles/theme";

const PageContent = styled.div`
  min-height: 100vh;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <PageContent>{children}</PageContent>
    </ThemeProvider>
  );
};

export default Page;
