import prisma from "~/lib/prisma";

export default defineEventHandler(async (event) => {
    const { id } = getRouterParams(event);
    const user = await prisma.user.findUnique({
        where: { id: Number(id) }
    });
    if (!user) {
        throw createError({ statusCode: 404, statusMessage: 'User not found' });
    }
    await prisma.user.update({
        where: { id: Number(id) },
        data: { active: !user.active }
    }).catch((error) => {
        console.error(error);
    });
    return
});