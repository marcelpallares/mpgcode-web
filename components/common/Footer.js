import LanguageSwitcher from "./LanguageSwitcher";

const Footer = ({ locale }) => {
  return (
    <div className="p-3">
      <LanguageSwitcher />
    </div>
  );
};

export default Footer;
