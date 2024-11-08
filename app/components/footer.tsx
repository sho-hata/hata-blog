import type { FC } from "hono/jsx";

type Props = {
  imageUrl: string;
};

export const Footer: FC<Props> = ({ imageUrl }) => {
  return (
    <footer class={"py-8 max-w-[780px] w-screen px-6"}>
      <div class={"flex items-center space-x-4"}>
        <img src={imageUrl} alt={"Profile"} class={"w-16 h-16 rounded-full"} />
        <div>
          <p class={"font-semibold"}>Shoki Hata</p>
          <p class={"text-sm"}>
            金融に携わっているソフトウェアエンジニア。週末はコーヒー豆の焙煎家をやっています。
          </p>
        </div>
      </div>
      <div class={"mt-8 text-gray-500 text-sm text-center"}>
        © 2024 Shoki Hata.
      </div>
    </footer>
  );
};
