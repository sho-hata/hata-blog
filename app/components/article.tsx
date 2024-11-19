import type { FC } from "hono/jsx";
import { formatDate } from "../lib/format/date";

export type Props = {
  date: string;
  title: string;
  entryName: string;
};

export const Article: FC<Props> = ({ date, title, entryName }) => {
  return (
    <div class={"flex flex-col gap-0"}>
      <time class={"text-sm max-md:text-xs"}>{formatDate(date)}</time>
      <a
        class={"text-lg max-md:text-base underline"}
        href={`/${entryName.replace(/\.mdx$/, "")}`}
      >
        {title}
      </a>
    </div>
  );
};
