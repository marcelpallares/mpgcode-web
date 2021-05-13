import Head from "next/head";
import { useTranslation } from "next-i18next";

const Meta = ({
  title,
  description,
  robots,
  opengraphImage,
  opengraphType,
  author,
}) => {
  const { t } = useTranslation();
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
      {/* TODO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {robots ? (
        <meta name="robots" content={robots} />
      ) : (
        <meta name="robots" content="noindex, nofollow" />
      )}
      {opengraphType ? (
        <meta property="og:type" content={opengraphType} />
      ) : (
        <meta property="og:type" content="website" />
      )}

      {/* TODO IMAGE URL!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
      {opengraphImage?.sourceUrl ? (
        <meta property="og:image" content={opengraphImage.sourceUrl} />
      ) : (
        <>
          <meta
            property="og:image"
            content="https://mpgcode-web.vercel.app/images/ogimage.png"
          />
          <meta property="og:image:width" content="300" />
          <meta property="og:image:height" content="300" />
        </>
      )}
    </Head>
  );
};

export default Meta;
