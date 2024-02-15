import { publicProcedure, router } from "./trpc";
import { z } from "Zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { Todo, User } from "../db";
// import { jwt } from "jsonwebtoken";
const todoInputType = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean().optional(),
});

const appRouter = router({
  createTodo: publicProcedure.input(todoInputType).mutation(async (opts) => {
    const title = opts.input.title;
    const description = opts.input.description;

    const todo = await Todo.create({
      title,
      description,
    });

    return {
      id: todo._id,
      todo,
    };
  }),

  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      let email = opts.input.email;
      let password = opts.input.password;

      const user = await User.create({
        email,
        password,
      });

      // let token = jwt.sign({ user }, "hey there");
      let token = "123456";
      return {
        user,
        token,
      };
      //
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
