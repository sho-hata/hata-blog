import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children, title, Layout }) => {
  return (
    <Layout>
      <div class="bg-slate-50 rounded-lg shadow-md px-8 py-4">
        <article class={"markdown"}>{children}</article>
      </div>
    </Layout>
  );
});
