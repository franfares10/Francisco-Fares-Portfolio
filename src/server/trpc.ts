import {initTRPC, TRPCError} from '@trpc/server';
import {type CreateNextContextOptions} from '@trpc/server/adapters/next';
import superjson from 'superjson';
import { ZodError } from 'zod';

const t = initTRPC.create({
    transformer: superjson,
    errorFormatter({shape,error}) {
        return {
            ...shape,
            data:{
                ...shape.data,
                zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
    });

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
    
