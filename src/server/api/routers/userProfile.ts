// import { User } from "@clerk/nextjs/dist/api";
import { clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import axios from "axios";
import { z } from "zod";
import "react-loading-skeleton/dist/skeleton.css";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { QEDataRes, QERawResponse } from "~/utils/data/types";
// import filterUserForClient from "~/server/helpers/filterUserForClient";

export const userProfileRouter = createTRPCRouter({
  create: privateProcedure.mutation(async ({ ctx, input }) => {
    try {
      const [user] = await clerkClient.users.getUserList({
        userId: [ctx.userId],
      });
      const email = user?.emailAddresses[0]?.emailAddress;

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const qeRes: { data: { [key: string]: string | number }[] } =
        await axios.get(process.env.NEXT_PUBLIC_QE_ENDPOINT || "", {
          data: {
            email,
          },
        });

      const { firstName, lastName, rawPayload }: QEDataRes = qeRes
        .data[0] as QEDataRes;

      const parsedPayload: QERawResponse = JSON.parse(
        rawPayload
      ) as QERawResponse;
      const {
        streetAddressLine1,
        city,
        state,
        zipCode,
        estimatedHomeValue,
        mortgageBalance,
        desiredCashout,
        phoneNumber,
        propertyType,
      } = parsedPayload;

      // const parsedResponse = JSON.parse(response);
      // const propertyDetailReport = JSON.parse(
      //   parsedResponse.leadData.propertyDetailReport
      // );
      // console.log("firstName: ", firstName);
      // console.log("lastName: ", lastName);
      // console.log("rawPayload", parsedPayload);

      if (!user) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "User not found",
        });
      }

      if (email) {
        const newUser = await ctx.prisma.userProfile.create({
          data: {
            email: email,
            firstName,
            lastName,
            streetAddressLine1,
            city,
            state,
            zipCode,
            estimatedHomeValue,
            mortgageBalance,
            desiredCashout,
            phoneNumber,
            propertyType,
          },
        });
        const userDocument = await ctx.prisma.userDocs.create({
          data: {
            email: email,
            type: "unknown",
          },
        });
        console.log("USER DOC: ", userDocument);
        return newUser;
      }
    } catch (err) {
      console.log("err", err);
      return err;
    }
  }),
  get: privateProcedure.query(async ({ ctx, input }) => {
    console.log("HERE: ");
    const [user] = await clerkClient.users.getUserList({
      userId: [ctx.userId],
    });
    const email = user?.emailAddresses[0]?.emailAddress;

    const userProfile = await ctx.prisma.userProfile.findUnique({
      where: { email: email },
    });

    return userProfile;
  }),
});
