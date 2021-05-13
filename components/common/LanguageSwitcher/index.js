import Link from "next/link";
import { useTranslation } from "next-i18next";

const LanguageSwitcher = ({
  locale = "en",
  destination = "",
  isPost = false,
}) => {
  const { t } = useTranslation();

  const getLanguageDest = () => {
    return locale === "es" ? "en" : "es";
  };

  return (
    <Link href={`/${destination}`} locale={getLanguageDest({ locale })}>
      <a>{t(isPost ? "post_switch" : "lang_switch")}</a>
    </Link>
  );
};

export default LanguageSwitcher;
