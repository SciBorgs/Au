/**
 * This is an example router. Typically, routers are separated by sections based on your database model.
 * All queries and mutations related to the specific model should be handled in this router, and called in your frontend pages
 * Ex: A "match scout" router would contain functions to create, delete, and update scout entires
 */

/* Zod is a library for ensuring typesafety within your request inputs */
import { z } from "zod";

/* Functions that let you create a new router, and new queries/mutations */
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() })) /* Declare the structure of your input (in this case, the input will be an object that has a string field named text) */
    .query(({ input }) => { // Returns a string
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  /**
   * Note how the bottom function starts with protectedProcedure, compared to the functions above using publicProcedure
   * This is because the bottom function can only be called by users that are signed in. Users that are signed out will NOT
   * be able to call this function.
   */
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
