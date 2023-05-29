import prisma from "$lib/prisma";
import type {PageServerLoad} from './$types';

export const load = (async () => {

// 1.
    const response = await prisma.list.findMany({
        // where: {published: true},
        // include: {author: true},
    })

// 2.
    return {feed: response};
}) satisfies PageServerLoad;