import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;

const isAuth = middleware(async (opts) => {
  // const { getUser } = getKindeServerSession()
  // const user = await getUser()

  // if (!user || !user.id) {
  //   throw new TRPCError({ code: 'UNAUTHORIZED' })
  // }

  return opts.next({
    ctx: {
      userId: 0,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
