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
// import { jwt } from "jsonwebtoken";
const todoInputType = Zod_1.z.object({
    title: Zod_1.z.string(),
    description: Zod_1.z.string(),
    done: Zod_1.z.boolean().optional(),
});
const appRouter = (0, trpc_1.router)({
    createTodo: trpc_1.publicProcedure.input(todoInputType).mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        const username = opts.ctx.username;
        console.log(username);
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
    signUp: trpc_1.publicProcedure
        .input(Zod_1.z.object({
        email: Zod_1.z.string(),
        password: Zod_1.z.string(),
    }))
        .mutation((opts) => __awaiter(void 0, void 0, void 0, function* () {
        let email = opts.input.email;
        let password = opts.input.password;
        const user = yield db_1.User.create({
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
    })),
});
const server = (0, standalone_1.createHTTPServer)({
    router: appRouter,
    createContext(opts) {
        let autHeader = opts.req.headers["authorization"];
        console.log(autHeader);
        return {
            username: "123",
        };
    },
});
server.listen(3000);
