import { serve } from "@hono/node-server";
import { Hono } from "hono";

// importing my package
import { greet } from "@monorepo/shared";

const app = new Hono();

app.get("/", (c) => {
  const message = greet("ali");
  return c.text(message);
});

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
