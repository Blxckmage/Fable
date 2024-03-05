import getAuth from "@/lib/get-auth";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request) {
  const user = await getAuth();
  const res = await request.json();
  const { title, body } = res;

  const result = await prisma.post.create({
    data: {
      slug: title.toLowerCase().replace(/ /g, "-"),
      title: title,
      body: body,
      author: user.firstName + " " + user.lastName,
      authorId: user.id,
    },
  });
  return NextResponse.json({ result });
}
