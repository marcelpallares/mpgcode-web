import { useTranslation } from "next-i18next";
import { HeaderContainer, Title, Subtitle } from "./styles";

const Header = () => {
  const { t } = useTranslation();

  return (
    <HeaderContainer>
      <div className="container">
        <Title>{t("home_intro")}</Title>
        <Subtitle>{t("home_intro_2")}</Subtitle>
        <Subtitle>{t("home_intro_3")}</Subtitle>
      </div>
    </HeaderContainer>
  );
};

export default Header;
