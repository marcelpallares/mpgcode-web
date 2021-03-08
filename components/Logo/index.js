import {
  Horizontal,
  Horizontal2,
  HorizontalShort,
  Vertical,
  Vertical2,
  VerticalShort,
  Infotipo,
} from "./sources";

const Logo = ({ white, accent, logoStyle = LogoStyles.horizontal }) => {
  let className = "";
  if (white) className += " white";
  else if (accent) className += " accent";

  switch (logoStyle) {
    case LogoStyles.infotipo:
      return <Infotipo className={className} />;
    case LogoStyles.vertical:
      return <Vertical className={className} />;
    case LogoStyles.vertical2:
      return <Vertical2 className={className} />;
    case LogoStyles.verticalShort:
      return <VerticalShort className={className} />;
    case LogoStyles.horizontal2:
      return <Horizontal2 className={className} />;
    case LogoStyles.horizontalShort:
      return <HorizontalShort className={className} />;
    default:
      return <Horizontal className={className} />;
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
};
