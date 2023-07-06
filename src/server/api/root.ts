import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { userProfileRouter } from "./routers/userProfile";
import { docsRouter } from "./routers/docs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
  userProfile: userProfileRouter,
  docs: docsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
