import { showRoutes } from "hono/dev";
import { serveStatic } from "@hono/node-server/serve-static";
import { createApp } from "honox/server";

const app = createApp();

showRoutes(app);
app.use("/public/*", serveStatic({ root: "./" }));

export default app;
