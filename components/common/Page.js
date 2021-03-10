import { ThemeProvider } from "styled-components";
import { MainTheme } from "../../styles/theme";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <Navbar />
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default Page;
