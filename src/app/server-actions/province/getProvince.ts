"use server";

import { excludeAllDetails } from "@/app/utils/server-action/excludeAllDetails";
import { Prisma } from "@prisma/client";
import prisma from "@/app/lib/prisma";

export default async function getProvince(
  options: Prisma.provinceFindManyArgs = {}
) {
  try {
    return await prisma.province.findMany({
      omit: excludeAllDetails,
      ...options,
      where: {
        deleted: 0,
        ...(options.where || {}),
      },
      orderBy: {
        name: "asc",
      },
    });
  } catch (e) {
    throw new Error("مشکلی در سرور پیش آمده لطفا مجددا تلاش نمایید !");
  }
}
