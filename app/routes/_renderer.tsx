import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, frontmatter }) => {
  const title = frontmatter?.title ?? "";
  return (
    <html lang="en">
      <head>{<title>{title}</title>}</head>
      <body>{children}</body>
    </html>
  );
});
