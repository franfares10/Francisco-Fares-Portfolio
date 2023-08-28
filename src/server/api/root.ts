import { createTRPCRouter } from "../trpc";
import { contactRoutes } from "./routes/contact";

export const appRouter = createTRPCRouter({
    contact: contactRoutes,
});

export type AppRouter = typeof appRouter;