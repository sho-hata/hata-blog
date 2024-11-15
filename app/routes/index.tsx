import { Article } from "../components/article";
import {
  GithubIcon,
  HomeIcon,
  NoteIcon,
  SizuMeIcon,
  XIcon,
} from "../components/icons";
import { getAllArticles } from "../lib/article";

export default function Top() {
  const imageUrl = import.meta.env.PROD
    ? "/static/me.png"
    : "/app/static/img/me.png";

  const articles = getAllArticles();
  return (
    <div class={"px-6 mt-6"}>
      <section class="py-12 bg-slate-50 rounded-lg shadow-md">
        <div class={"mx-8"}>
          <div class={"flex items-center space-x-4 mb-8"}>
            <img
              src={imageUrl}
              alt={"Profile"}
              class={"w-20 h-20 rounded-full"}
            />
            <div class={"flex flex-col gap-2"}>
              <span class={"font-semibold"}>Shoki Hata</span>
              <p class={"text-sm"}>
                GoやTypeScriptでソフトウェアを書いているHataです。
                このブログでは、雑多な技術ネタや、とりとめもないことを記録します。
              </p>
            </div>
          </div>
          <div class={"flex gap-2 items-center pb-8 border-b"}>
            <a
              href="https://gist.github.com/sho-hata/94c4a5066b101d98080abd6ef45a44b0"
              target="_blank"
              rel="noreferrer noopener"
            >
              <HomeIcon size={22} title="@sho-hata" />
            </a>
            <a
              href="https://x.com/sho_hata_"
              target="_blank"
              rel="noreferrer noopener"
            >
              <XIcon size={20} title="@sho_hata_" />
            </a>
            <a
              href="https://github.com/sho-hata"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GithubIcon size={22} title="@sho-hata" />
            </a>
            <a
              href="https://sizu.me/sho_hata"
              target="_blank"
              rel="noreferrer noopener"
            >
              <SizuMeIcon size={20} title="@sho_hata" />
            </a>
            <a
              href="https://note.com/sho_hata/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <NoteIcon size={10} title="@sho_hata" />
            </a>
          </div>
          <div class={"mt-6 flex flex-col gap-8"}>
            {articles.map(({ entryName, frontmatter }) => {
              if (entryName) {
                return (
                  <Article
                    key={entryName}
                    title={frontmatter.title}
                    date={frontmatter.date}
                    entryName={entryName}
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
