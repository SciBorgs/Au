/**
 * User Router
 */

import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getUser: protectedProcedure
    .query(async ({ ctx }) => {
      return await ctx.prisma.user.findUnique({ where: { id: ctx.session.user.id } })
    })
})
