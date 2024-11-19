import type { NotFoundHandler } from "hono";

const handler: NotFoundHandler = (c) => {
  const imageUrl = import.meta.env.PROD
    ? "/static/404.png"
    : "/app/static/img/404.png";
  return c.render(
    <div class={"flex flex-col min-h-screen items-center mb-2 mx-2"}>
      <h1 class={"text-6xl font-bold mb-4 mt-6 pb-2 text-slate-800"}>404</h1>
      <span class={"text-slate-500 mb-8"}>
        このページはすでに削除されているか、URLが間違っている可能性があります。
      </span>
      <img src={imageUrl} alt="404" class={"w-80 h-80 rounded-full mb-8"} />
      <a href="/" class={"text-lg max-md:text-base underline"}>
        記事一覧へ
      </a>
    </div>,
  );
};

export default handler;
