import { jsxRenderer, useRequestContext } from "hono/jsx-renderer";
import { GithubIcon, XIcon } from "../../components/icons";

export default jsxRenderer(({ children, Layout, frontmatter }) => {
  const imageUrl = import.meta.env.PROD
    ? "/static/me.png"
    : "/app/static/img/me.png";

  const c = useRequestContext();
  const currentPath = c.req.path;

  return (
    <Layout>
      <div class={"mt-6 sm:px-6"}>
        <div class="bg-slate-50 shadow-sm px-8 py-4 mb-12">
          <div class={"mb-8"}>
            <article class={"markdown"}>{children}</article>
          </div>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://sho-hata.com${currentPath}`)}&text=${encodeURIComponent(`${frontmatter.title} | hata's blog`)}`}
            referrerpolicy="no-referrer"
            class={"flex hover:opacity-70 transition-opacity"}
          >
            <XIcon size={26} title="x(Twitter)にポスト" />
          </a>
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
                rel="noreferrer noopener"
              >
                <XIcon title="@sho_hata_" />
              </a>
              <a
                href="https://github.com/sho-hata"
                target="_blank"
                rel="noreferrer noopener"
              >
                <GithubIcon title="@sho-hata" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
});
