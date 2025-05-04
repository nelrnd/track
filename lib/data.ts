import { auth } from "@/auth"
import { prisma } from "@/prisma"

export async function fetchUser() {
  const session = await auth()
  if (!session?.user) {
    throw new Error("User must be logged in")
  }
  return { ...session.user }
}

export async function fetchHabits() {
  const { id } = await fetchUser()
  const habits = await prisma.habit.findMany({
    where: { userId: id },
    include: { tracks: { orderBy: { createdAt: "desc" }, take: 1 } },
  })
  return habits
}

export async function fetchTracks() {
  const { id } = await fetchUser()
  const tracks = await prisma.track.findMany({ where: { userId: id } })
  return tracks
}
