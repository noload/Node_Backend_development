import { publicProcedure, router } from "./trpc";
import { z } from "Zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { Todo } from "../db";
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
});

const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;
