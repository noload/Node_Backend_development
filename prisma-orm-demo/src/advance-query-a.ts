import {PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({'log':['info','query']})

async function main() {
   const user = await prisma.user.findMany({
    where:{
        email:{
            endsWith:"gmail.com"
        },
        posts:{
            some:{
                published:true
            }
        }
    },
    include:{
        posts:{
            where:{
                published:true
            }
        }
    }
    })

    console.log(user);
    
}
main()