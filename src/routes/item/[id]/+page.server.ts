import prisma from "$lib/prisma";
import type {PageServerLoad} from './$types';

export const load = (async ({ params: { id } }) => {

// 1.
    const itemResponse = await prisma.item.findUnique({
        where: { id: Number(id) },
    })
    const categoriesResponse = await prisma.category.findMany()

// 2.
    return {
        item: itemResponse,
        categories: categoriesResponse
    };
}) satisfies PageServerLoad;