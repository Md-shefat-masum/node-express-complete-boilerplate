const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({});
const bcrypt = require("bcrypt");

prisma
    .$connect()
    .then(async () => {
        if(await prisma.User?.findMany()){
            await prisma.User.deleteMany({});
        }
        if(await prisma.UserRole?.findMany()){
            await prisma.UserRole.deleteMany({});
        }
        const password = await bcrypt.hash("12345678", 10);
        var user = await prisma.user.create({
            data: {
                email: "super_admin@ex.com",
                user_name: "super admin",
                password: password,
                role: {
                    create: {
                        name: "super admin",
                    },
                },
            },
        });
        user = await prisma.user.create({
            data: {
                email: "admin@ex.com",
                user_name: "admin",
                password: password,
                role: {
                    create: {
                        name: "admin",
                    },
                },
            },
        });
        user = await prisma.user.create({
            data: {
                email: "user@ex.com",
                user_name: "user",
                password: password,
                role: {
                    create: {
                        name: "user",
                    },
                },
            },
        });
    })
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

// A `main` function so that you can use async/await
async function main() {
    // Create user, posts, and categories
    await prisma.user.deleteMay({});
    await prisma.user_roles.deleteManay({});
    const user = await prisma.user.create({
        data: {
            email: "ariadne@prisma.io",
            name: "Ariadne",
            roles: {
                create: [
                    {
                        name: "super admin",
                    },
                    {
                        name: "admin",
                    },
                    {
                        name: "user",
                    },
                ],
            },
        },
    });

    // Return user, and posts, and categories
    const returnUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
        include: {
            posts: {
                include: {
                    categories: true,
                },
            },
        },
    });

    console.log(returnUser);
}

// main()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });
