import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // ... you will write your Prisma Client queries here
  await prisma.user.create({
    data:{
        email : "nidhish0430@gmail.com",
        name : "Nidhish",
        posts : {
            create : [
                {
                    title : "title1"
                },
                {
                    title : "title2"
                }
            ]
        }
    }
  })
}

main()

// tsc -b to convert it to js code,then run node dist/filename.js,npx prisma studio to check
