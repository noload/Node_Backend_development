import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
   await prisma.post.create({
        data:{
            title:"go to gym",
            content:"going for gym to learn new things",
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