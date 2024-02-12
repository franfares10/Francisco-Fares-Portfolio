import { initTRPC, TRPCError } from '@trpc/server';
import { type CreateNextContextOptions } from '@trpc/server/adapters/next';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { type Session } from 'next-auth';
import  prisma  from '@/lib/db';

interface CreateContextOptions {
    session: Session | null;
}

const createInnerTRPCContext = (opts: CreateContextOptions) => {
    return {
        session: opts.session,
        prisma,
    };
};

export const createTRPCContext = async (opts: CreateNextContextOptions) => {
    const { req, res } = opts;
  
    // Get the session from the server using the getServerSession wrapper function
  
    return createInnerTRPCContext({
      session: null,
    });
  };

const t = initTRPC.context<typeof createInnerTRPCContext>().create({
    transformer: superjson,
    errorFormatter({ shape, error }) {
        return {
            ...shape,
            data: {
                ...shape.data,
                zodError: error.cause instanceof ZodError ? error.cause.flatten() : null,
            },
        };
    },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;

