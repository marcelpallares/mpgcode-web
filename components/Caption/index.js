import Logo, { LogoStyles } from "../Logo";
import { CaptionContainer, Text } from "./styles";

const Caption = ({ text }) => {
  return (
    <CaptionContainer>
      <Logo accent logoStyle={LogoStyles.horizontalShort} />
      <div>
        <Text>{text}</Text>
      </div>
    </CaptionContainer>
  );
};

export default Caption;
