import { auth } from "@/auth"
import { prisma } from "@/prisma"

export async function fetchHabits() {
  const session = await auth()
  if (!session?.user?.id) {
    throw new Error("User must be logged in")
  }
  const habits = await prisma.habit.findMany({
    where: { userId: session.user.id },
  })
  return habits
}
