import { JSDOM } from "jsdom";
type OgpKey = "title" | "description" | "image" | "url";
type Ogp = {
  title: string;
  description: string;
  image: string;
  url: string;
  imageAlt?: string;
  favicon?: string;
};
export const fetchOgp = async (url: string) => {
  const ogp: Ogp = {
    title: "",
    description: "",
    image: "",
    url: "",
  };
  try {
    const dom = await JSDOM.fromURL(url);
    const host = new URL(url).host;
    ogp.favicon = `https://www.google.com/s2/favicons?domain=${host}&sz=20`;
    const metas = dom.window.document.getElementsByTagName("meta");

    // biome-ignore lint/complexity/noForEach: <explanation>
    Array.from(metas).forEach((v) => {
      const prop = v.getAttribute("property");
      if (!prop) return;
      const key = prop.replace("og:", "");
      if (key === "image:alt") ogp.imageAlt = v.getAttribute("content") || "";
      if (!isOgpKey(key)) return;
      ogp[key] = v.getAttribute("content") || "";
    });

    return ogp;
  } catch (e) {
    console.error(e);
  }
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function isOgpKey(key: any): key is OgpKey {
  return (
    key === "title" ||
    key === "image" ||
    key === "description" ||
    key === "url" ||
    key === "alt"
  );
}

type Props = {
  url: string;
};

export const ExternalOgp = async (props: Props) => {
  const ogp = await fetchOgp(props.url);

  if (!ogp) return <></>;
  const host = new URL(props.url).host;
  return (
    <a
      href={props.url}
      target="_blank"
      class={"ogp-link transition-opacity hover:opacity-65"}
      rel="noreferrer"
    >
      <div
        class={
          "flex border dark:border-gray-600 rounded-lg  no-underline h-[136px] max-md:h-28 my-4"
        }
      >
        <div class="flex flex-col justify-between px-6 py-4 h-full w-full max-md:px-4">
          <span class={"font-bold text-ellipsis line-clamp-1 max-md:text-sm"}>
            {ogp.title}
          </span>
          <span
            class={
              "text-sm text-ellipsis line-clamp-2 text-gray-500 dark:text-gray-300 max-md:text-xs"
            }
          >
            {ogp.description}
          </span>
          <div class="flex gap-2 items-center">
            {ogp.favicon && (
              <img
                src={ogp.favicon}
                width={16}
                height={16}
                alt={`favicon of ${ogp.url}`}
              />
            )}

            <span class="text-xs">{host}</span>
          </div>
        </div>
        <div class="h-full">
          <img
            src={ogp.image}
            class={"h-full w-fit rounded-r-lg max-w-[32vw] object-cover"}
            alt={`ogp of ${ogp.image}`}
          />
        </div>
      </div>
    </a>
  );
};
