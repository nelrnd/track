"use server"

import { auth } from "@/auth"
import { prisma } from "@/prisma"

export async function createHabit(
  prevState: string | undefined,
  formData: FormData
) {
  const session = await auth()
  if (!session?.user) {
    throw new Error("User must be logged in")
  }
  const name = formData.get("name") as string
  await prisma.habit.create({
    data: { name, userId: session.user.id as string },
  })
  return "ok"
}
