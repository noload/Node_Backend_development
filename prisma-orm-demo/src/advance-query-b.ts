import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const posts =await prisma.post.findMany({
        skip:2,//act like offset / pages
        take:3, // act like limit in sql query
    })
    console.log(posts);
    
}

main()