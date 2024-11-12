import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { Header } from "../components/header";
import { blogName } from "../constraints";
import { getAllArticles } from "../lib/article";
import styles from "../styles/style.css?url";

export default jsxRenderer(({ children }) => {
  const c = useRequestContext();
  const currentUrl = c.req.url;

  const article = getAllArticles().find(
    (a) => a.entryName === c.req.routePath.slice(1),
  );
  const pageTitle = article?.frontmatter.title
    ? `${article?.frontmatter.title} - ${blogName}`
    : blogName;

  const description = "雑多な技術ネタや、とりとめもないことを記録したブログ";
  const slug = article?.entryName?.match(/(?<=articles\/\d+\/)[a-z0-9]+/);
  const ogpPath = slug ? `/ogps/${slug[0]}.png` : "/ogp.png";

  return (
    <html lang="ja">
      <head>
        <meta http-equiv="content-language" content="ja" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <link href="/styles/style.css" rel="stylesheet" />
        ) : (
          <link href={styles} rel="stylesheet" />
        )}
        {import.meta.env.PROD ? (
          <link rel="icon" href="https://sho-hata.com/favicon.ico" />
        ) : (
          <link rel="icon" href="/favicon.ico" />
        )}
        <meta name="description" content={description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={blogName} />
        <meta property="og:image" content={`https://sho-hata.com${ogpPath}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@sho_hata_" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://sho-hata.com${ogpPath}`} />
        {<title>{pageTitle}</title>}
      </head>
      <body
        class={"flex flex-col min-h-screen items-center mb-2 mx-2 bg-slate-100"}
      >
        <Header blogName={blogName} />
        <main class={"flex-grow max-w-[780px] w-screen"}>{children}</main>
        <footer class={"py-8 max-w-[780px] w-screen px-6"}>
          <div class={"mt-8 text-gray-500 text-sm text-center"}>
            {`© 2024 ${blogName}`}
          </div>
        </footer>
      </body>
    </html>
  );
});
