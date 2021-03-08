import Head from "next/head";
import { useTranslation } from "next-i18next";

const Meta = ({ title, description, robots }) => {
  const { t } = useTranslation();
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.png" />

      {title ? (
        <>
          <title>{title}</title>
          <meta property="og:title" content={title} key="title" />
        </>
      ) : (
        <>
          <title>{t("meta_title")}</title>
          <meta property="og:title" content={t("meta_title")} key="title" />
        </>
      )}

      {description ? (
        <>
          <meta name="description" content={description} />
          <meta property="og:description" content={description} />
        </>
      ) : (
        <>
          <meta name="description" content={t("meta_description")} />
          <meta property="og:description" content={t("meta_description")} />
        </>
      )}

      {robots ? (
        <meta name="robots" content={robots} />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
    </Head>
  );
};

export default Meta;
