import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface updateParam {
  firstName: string;
  lastName: string;
}

async function updateUser(email: string, { firstName, lastName }: updateParam) {
  const res = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      firstName: firstName,
      lastName: lastName,
    },
  });

  console.log(res);
}

updateUser("vaibhav@gmail.com", {
  firstName: "Rahul",
  lastName: "Kamble",
});
