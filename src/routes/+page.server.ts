import prisma from "$lib/prisma";
import type {PageServerLoad} from './$types';

export const load = (async () => {

// 1.
    const listResponse = await prisma.list.findMany()

// 2.
    return {feed: listResponse};
}) satisfies PageServerLoad;