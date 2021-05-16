import styled, { ThemeProvider } from "styled-components";
import { MainTheme } from "../../styles/theme";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
`;

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Container>
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default Page;
