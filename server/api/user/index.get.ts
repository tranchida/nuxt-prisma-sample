import prisma from "~/lib/prisma";


export default defineEventHandler(async (event) => {

    const { order } = getQuery(event);
    console.log(order);
    const users = await prisma.user.findMany({
        orderBy: order === 'asc' ? [{   
            lastName: 'asc'
        },{
            firstName: 'asc'
        }] : [{
            lastName: 'desc'
        },{
            firstName: 'desc'
        }]
    });

    return users;
});