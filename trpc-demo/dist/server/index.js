"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const trpc_1 = require("./trpc");
const Zod_1 = require("Zod");
const standalone_1 = require("@trpc/server/adapters/standalone");
const db_1 = require("../db");
const todoInputType = Zod_1.z.object({
    title: Zod_1.z.string(),
    description: Zod_1.z.string(),
    done: Zod_1.z.boolean().optional(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoInputType).mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const title = opts.input.title;
        const description = opts.input.description;
        const todo = yield db_1.Todo.create({
            title,
            description,
        });
        return {
            id: todo._id,
            todo,
        };
    })),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
});
server.listen(3000);
