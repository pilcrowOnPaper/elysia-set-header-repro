import { Elysia } from "elysia";
import type { Context } from "elysia";

const setCookie = (context: Context) => {
  context.set.headers["Set-Cookie"] = "foo=bar;path=/";
};

const app = new Elysia()
  .get("/", (context) => {
    setCookie(context as any);
    // un-comment following line to get expected result:
    // context.set;
    return "Hello world";
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
