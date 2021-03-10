import {
  Horizontal,
  Horizontal2,
  HorizontalShort,
  Vertical,
  Vertical2,
  VerticalShort,
  Infotipo,
  EMenu,
} from "./sources";

const Logo = ({
  white,
  accent,
  logoStyle = LogoStyles.horizontal,
  height = 50,
}) => {
  let className = "";
  if (white) className += " white";
  else if (accent) className += " accent";

  switch (logoStyle) {
    case LogoStyles.infotipo:
      return <Infotipo className={className} height={height} />;
    case LogoStyles.vertical:
      return <Vertical className={className} height={height} />;
    case LogoStyles.vertical2:
      return <Vertical2 className={className} height={height} />;
    case LogoStyles.verticalShort:
      return <VerticalShort className={className} height={height} />;
    case LogoStyles.horizontal2:
      return <Horizontal2 className={className} height={height} />;
    case LogoStyles.horizontalShort:
      return <HorizontalShort className={className} height={height} />;
    case LogoStyles.eMenu:
      return <EMenu className={className} height={height} />;
    default:
      return <Horizontal className={className} height={height} />;
  }
};

export default Logo;
export const LogoStyles = {
  infotipo: "infotipo",
  horizontal: "horizontal",
  horizontal2: "horizontal2",
  horizontalShort: "horizontalShort",
  vertical: "vertical",
  vertical2: "vertical2",
  verticalShort: "verticalShort",
  eMenu: "eMenu",
};
