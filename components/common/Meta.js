import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { isLiveEnv } from "../../utils/helpers";

const Meta = ({
  title,
  description,
  robots,
  ogImage,
  isPost = false,
  publishedDate,
  langAlternate,
}) => {
  const { locale = "en", asPath = "/" } = useRouter();
  const { t } = useTranslation();
  const BASE_URL = process.env.NEXT_PUBLIC_ROOT_URL;

  const alternateLang =
    locale === "es"
      ? { locale: "en", path: "" }
      : { locale: "es", path: "/es" };

  const isDefaultLang = locale === "en";

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="/images/favicon.png" />
      <link rel="apple-touch-icon" href="app-icon.png" />
      <meta property="application-name" content="MPGCode" />
      <meta property="og:site_name" content="MPGCode" />
      <meta name="author" content={"Marcel Pallarés"} />
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
      {isPost ? (
        <>
          <meta property="og:type" content="article" />
          <meta property="article:author" content="Marcel Pallarés" />
        </>
      ) : (
        <meta property="og:type" content="website" />
      )}
      {isPost && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}

      {isLiveEnv && robots && <meta name="robots" content={robots} />}
      {isLiveEnv && !robots && <meta name="robots" content="index, follow" />}
      {!isLiveEnv && <meta name="robots" content="noindex, nofollow" />}

      {ogImage ? (
        <meta property="og:image" content={`${BASE_URL}/${ogImage}`} />
      ) : (
        <>
          <meta
            property="og:image"
            content={`${BASE_URL}/images/ogimage.png`}
          />
        </>
      )}
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      {langAlternate ? (
        <>
          <link
            rel="alternate"
            hrefLang={alternateLang.locale}
            href={`${BASE_URL}${alternateLang.path}/${langAlternate}`}
          />
          {!isDefaultLang && (
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${BASE_URL}${alternateLang.path}/${langAlternate}`}
            />
          )}
        </>
      ) : (
        <>
          <link
            rel="alternate"
            hrefLang={alternateLang.locale}
            href={`${BASE_URL}${alternateLang.path}${asPath}`}
          />
          {!isDefaultLang && (
            <link
              rel="alternate"
              hrefLang="x-default"
              href={`${BASE_URL}${asPath}`}
            />
          )}
        </>
      )}
    </Head>
  );
};

export default Meta;
