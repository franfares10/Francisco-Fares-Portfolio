import { z } from 'zod';
import { createTRPCRouter, publicProcedure } from '../../trpc';

export const contactRoutes = createTRPCRouter({
    createMessage: publicProcedure
        .input(
            z.object({
                name: z.string().min(1).max(255),
                company: z.string().min(1).max(255),
                email: z.string().email(),
                message: z.string().min(1),
            })
        )
        .mutation(({ctx: {session, prisma}, input }) => {
            return prisma.message.create({
                data: {
                    name: input.name,
                    company: input.company,
                    email: input.email,
                    message: input.message,
                },
            });
        }),
})