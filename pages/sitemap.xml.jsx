import { getAllPosts } from "../utils/blogUtils";
import { isTestEnv } from "../utils/helpers";

const toUrl = (host, route, locale = "en", localizedRoute) =>
  `<url>
    <loc>https://${host}${
    locale !== "en" ? `/${locale}` : ""
  }${route}</loc>${getLocalizedLink(host, localizedRoute, locale)}
  </url>`;

const getLocalizedLink = (host, route, originalLocale) => {
  let xml = "";
  const locale = getAlternativeLocale(originalLocale);
  if (route) {
    xml = `
    <xhtml:link
      rel="alternate"
      hreflang="${locale}"
      href="https://${host}${locale !== "en" ? `/${locale}` : ""}/${route}"/>`;
  }

  return xml;
};

const getAlternativeLocale = (locale) => (locale === "en" ? "es" : "en");

const createSitemap = (
  host,
  routes,
  posts
) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${routes.map((route) => toUrl(host, `/${route}`)).join("")}
  ${posts
    .map((post) =>
      toUrl(host, `/${post.slug}`, post.locale, post.localizedSlug)
    )
    .join("")}
</urlset>`;

const Sitemap = () => {};

export const getServerSideProps = async ({ res, req }) => {
  if (isTestEnv) {
    res.statusCode = 404;
    res.write("");
    res.end();

    return {
      props: {},
    };
  }

  const routes = [""];
  const posts = await getAllPosts({ locales: ["en", "es"] });
  const sitemap = createSitemap(req.headers.host, routes, posts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
