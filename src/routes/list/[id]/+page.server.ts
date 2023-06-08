import prisma from "$lib/prisma";
import type {PageServerLoad} from './$types';

export const load = (async ({ params: { id } }) => {

// 1.
    const listResponse = await prisma.list.findUnique({
        where: { id: Number(id) },
        include: {
            categories: {
                include: { items: true }
            }
        },
    })

// 2.
    return {list: listResponse};
}) satisfies PageServerLoad;