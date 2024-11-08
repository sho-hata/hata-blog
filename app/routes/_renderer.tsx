import { jsxRenderer } from "hono/jsx-renderer";
import { blogName } from "../constraints";
import styles from "../styles/style.css?url";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default jsxRenderer(({ children, frontmatter }) => {
  const pageTitle = frontmatter?.title
    ? `${frontmatter.title} - ${blogName}`
    : blogName;

  const footerImageUrl = import.meta.env.PROD
    ? "/img/hata.png"
    : "/app/public/img/hata.png";

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
        {<title>{pageTitle}</title>}
      </head>
      <body
        class={"flex flex-col min-h-screen items-center mb-2 mx-2 bg-slate-100"}
      >
        <Header blogName={blogName} />
        <main class={"flex-grow max-w-[780px] w-screen px-6 mt-6"}>
          {children}
        </main>
        <Footer imageUrl={footerImageUrl} />
      </body>
    </html>
  );
});
