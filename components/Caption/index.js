import { CaptionContainer, Text } from "./styles";

const Caption = ({ text }) => {
  return (
    <CaptionContainer>
      <Text>{text}</Text>
    </CaptionContainer>
  );
};

export default Caption;
