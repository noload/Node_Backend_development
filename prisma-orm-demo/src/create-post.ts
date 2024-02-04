import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
   await prisma.post.create({
        data:{
            title:"go to school",
            content:"going for school to learn new things",
            author:{
                connect:{
                    id:3
                }
            },
            published:true
        }
    })
}
main()