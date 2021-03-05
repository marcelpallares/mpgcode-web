import Link from "next/link";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = ({ locale }) => {
  const { t } = useTranslation();

  const getLanguageDest = () => {
    return locale === "es" ? "en" : "es";
  };

  return (
    <Link href="/" locale={getLanguageDest({ locale })}>
      <a>{t("lang_switch")}</a>
    </Link>
  );
};

export default LanguageSwitcher;
