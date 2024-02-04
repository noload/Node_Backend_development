import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    await prisma.user.update({
        where:{
            id:1
        },
        data:{
            email:"vaibhavkamble023@gmail.com",
            name:"Vaibhav p Kamble",
        }

    })
}

main()