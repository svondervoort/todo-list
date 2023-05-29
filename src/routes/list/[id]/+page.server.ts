import prisma from "$lib/prisma";
import type {PageServerLoad} from './$types';

export const load = (async ({ params: { id } }) => {

    console.log(id);
// 1.
    const response = await prisma.list.findUnique({
        where: { id: Number(id) },
        include: {
            categories: {
                include: { items: true }
            }
        },
    })

// 2.
    return {list: response};
}) satisfies PageServerLoad;