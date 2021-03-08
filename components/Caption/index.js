import Logo, { LogoStyles } from "../Logo";
import { CaptionContainer, Text } from "./styles";

const Caption = ({ text }) => {
  return (
    <CaptionContainer>
      <Logo accent logoStyle={LogoStyles.horizontal2} />
      <div>
        <Text>{text}</Text>
      </div>
    </CaptionContainer>
  );
};

export default Caption;
