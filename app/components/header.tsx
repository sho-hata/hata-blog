import type { FC } from "hono/jsx";

export type Props = {
  blogName: string;
};

export const Header: FC<Props> = ({ blogName }) => {
  return (
    <header class={"py-8"}>
      <a href={"/"}>
        <h2 class={"text-xl font-semibold max-md:text-lg"}>{blogName}</h2>
      </a>
    </header>
  );
};
