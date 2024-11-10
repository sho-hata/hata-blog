import type { FC } from "hono/jsx";
import { GithubIcon, XIcon } from "./icons";
import { blogName } from "../constraints";

type Props = {
  imageUrl: string;
};

export const Footer: FC<Props> = ({ imageUrl }) => {
  return (
    <footer class={"py-8 max-w-[780px] w-screen px-6"}>
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
      <div class={"mt-8 text-gray-500 text-sm text-center"}>
        {`© 2024 ${blogName}`}
      </div>
    </footer>
  );
};
