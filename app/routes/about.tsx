import type { Context } from "hono";

export default function About(c: Context) {
  const imageUrl = import.meta.env.PROD
    ? "/static/me.png"
    : "/app/static/img/me.png";

  return (
    <div class={"px-6 mt-6"}>
      <section class="py-12 bg-slate-50 rounded-lg shadow-md markdown px-8">
        <h1 class={"text-2xl font-semibold max-md:text-lg"}>Shoki Hata</h1>
        <div class={"flex items-center space-x-4 mb-8"}>
          <img
            src={imageUrl}
            alt={"Profile"}
            class={"w-24 h-24 rounded-full"}
          />
          <div class={"flex flex-col gap-2"}>
            <p>主にGo、TypeScriptでソフトウェアを書くエンジニアです。</p>
            <p>金融領域にいます。</p>
          </div>
        </div>
        <h2>経歴</h2>
        <p>
          2020年に株式会社エイチームに新卒入社し、バックエンド・WebフロントエンドでのWebメディアサービスの開発を担当。2022年より、株式会社カンムでAndroid/iOS・バックエンドでのクレジットカードサービスの開発にたずさわっています。
        </p>
        <a href="https://gist.github.com/sho-hata/366a404f31ed8b7b9e1ee38da16c7401">
          詳細な経歴
        </a>
        <h2>技術記事</h2>
        <ul>
          <li>
            <a href="https://qiita.com/sho-hata">Qiita (~2022)</a>
          </li>
          <li>
            <a href="https://zenn.dev/sho_hata">Zenn (2022~)</a>
          </li>
          <li>
            <a href="https://tech.kanmu.co.jp/search?q=sho-hata">
              社テックブログ：担当した記事
            </a>
          </li>
        </ul>
        <h2>登壇</h2>
        <p>
          <a href="https://speakerdeck.com/shohata">Speaker Deck: 登壇資料</a>
        </p>
        <h3>国内</h3>
        <ul>
          <li>
            <a href="https://gocon.jp/2024/sessions/8/">Go Conference 2024</a>
          </li>
          <li>
            <a href="https://gocon.jp/2023/sessions/A2-SP/">
              Go Conference 2023
            </a>
          </li>
        </ul>
        <h3>海外</h3>
        <ul>
          <li>
            <a href="https://hasura.io/events/hasura-con-2022/lets-contribute-to-hasura/">
              Hasura Conference 2022
            </a>
          </li>
        </ul>
        <h2>趣味</h2>
        <p>
          コーヒー豆を
          <a href="https://www.instagram.com/hatacafe_/profilecard/?igsh=MWhscHFscWVxZ2FleQ==">
            自家焙煎
          </a>
          しています。焙煎したコーヒー豆は、カフェに提供しています。
        </p>
        <a href="/">記事一覧へ</a>
      </section>
    </div>
  );
}
