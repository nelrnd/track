import { Prisma } from "@/generated/prisma"

export type Year = {
  title: string
  months: Month[]
}

export type Month = {
  title: string
  daysCount: number
  startsAt: number
}

export type HabitsWithLastTrack = Prisma.HabitGetPayload<{
  include: { tracks: { orderBy: { createdAt: "desc" }; take: 1 } }
}>
