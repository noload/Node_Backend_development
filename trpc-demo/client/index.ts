import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";
//     👆 **type-only** import
// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

async function main() {
  // const resp = await trpc.createTodo.mutate({
  //   title: "go to gym",
  //   description: "muscular body done",
  // });

  const resp = await trpc.signUp.mutate({
    email: "vaibhav@gmail.com",
    password: "vaibhav@123",
  });
  console.log(resp);
}

main();
