import { getCurrentRole } from "@/lib/current-role";
import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async () => {
  const role = await getCurrentRole();
  if (role === UserRole.ADMIN) {
    return new NextResponse(null, { status: 200 });
  }
  return new NextResponse(null, { status: 403 });
};
