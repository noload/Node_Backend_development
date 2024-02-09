import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(
  email: string,
  firstName: string,
  lastName: string,
  password: string
) {
  const res = await prisma.user.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      password: password,
    },
    select: {
      id: true,
      email: true,
    },
  });
  console.log(res);
}

insertUser("vaibhav@gmail.com", "vaibhav", "Kamble", "vaibhav@123K");
