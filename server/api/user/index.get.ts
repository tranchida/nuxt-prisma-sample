import prisma from "~/lib/prisma";


export default defineEventHandler(async (event) => {

    const users = await prisma.user.findMany({
        orderBy: [{
            lastName: 'asc'
        },{
            firstName: 'asc'
        }]
    });

    return users;
});