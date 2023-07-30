/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRouter } from "~/server/createRouter";
import { downloadMp3 } from "../downloader/downloader";

export const listRouter = createRouter()
  // read
  .query("all", {
    async resolve() {
      /**
       * For pagination you can have a look at this docs site
       * @link https://trpc.io/docs/useInfiniteQuery
       */
      const song = await downloadMp3();
      return [song];
    },
  })
  .query("byId", {
    input: z.object({
      id: z.string(),
    }),
    async resolve({ input }) {
      const { id } = input;
      const list = null;
      if (!list) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: `No list with id '${id}'`,
        });
      }
      return list;
    },
  });
