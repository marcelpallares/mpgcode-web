import styled from "styled-components";
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
    <Container>
      <Navbar />
      <Content>{children}</Content>
      <Footer />
    </Container>
  );
};

export default Page;
