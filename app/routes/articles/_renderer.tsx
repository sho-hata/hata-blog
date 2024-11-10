import { jsxRenderer } from "hono/jsx-renderer";
import { GithubIcon, XIcon } from "../../components/icons";

export default jsxRenderer(({ children, title, Layout }) => {
  const imageUrl = import.meta.env.PROD
    ? "/static/hata.png"
    : "/app/static/img/hata.png";

  return (
    <Layout>
      <div class="bg-slate-50 rounded-lg shadow-md px-8 py-4 mb-12">
        <article class={"markdown"}>{children}</article>
      </div>
      <div class={"flex items-center space-x-4"}>
        <img src={imageUrl} alt={"Profile"} class={"w-20 h-20 rounded-full"} />
        <div class={"flex flex-col gap-2"}>
          <span class={"font-semibold"}>Shoki Hata</span>
          <p class={"text-sm"}>
            金融に携わっているソフトウェアエンジニア。週末はコーヒー豆を焙煎しています。
          </p>
          <div class={"flex gap-2 items-center"}>
            <a href="https://x.com/sho_hata_" target="_blank" rel="noreferrer">
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
    </Layout>
  );
});
