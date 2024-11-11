import { jsxRenderer } from "hono/jsx-renderer";
import { GithubIcon, XIcon } from "../../components/icons";

export default jsxRenderer(({ children, title, Layout }) => {
  const imageUrl = import.meta.env.PROD
    ? "/static/me.png"
    : "/app/static/img/me.png";

  return (
    <Layout>
      <div class={"mt-6 sm:px-6"}>
        <div class="bg-slate-50 shadow-sm px-8 py-4 mb-12">
          <article class={"markdown"}>{children}</article>
        </div>
        <div class={"flex items-center space-x-4 px-6"}>
          <div class={"flex-shrink-0"}>
            <a href="/">
              <img
                src={imageUrl}
                alt={"Profile"}
                class={"w-20 h-20 rounded-full"}
              />
            </a>
          </div>
          <div class={"flex flex-col gap-2"}>
            <a href="/" class={"font-semibold"}>
              Shoki Hata
            </a>
            <p class={"text-sm"}>
              決済領域のソフトウェアエンジニア。週末はコーヒー豆を焙煎しています。
            </p>
            <div class={"flex gap-2 items-center"}>
              <a
                href="https://x.com/sho_hata_"
                target="_blank"
                rel="noreferrer"
              >
                <XIcon />
              </a>
              <a
                href="https://github.com/sho-hata"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});
