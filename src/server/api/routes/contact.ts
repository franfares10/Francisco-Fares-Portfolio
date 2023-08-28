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
        .mutation(({ctx, input }) => {
            console.log(input);
            return {
                success: true,
            };
        }),
})