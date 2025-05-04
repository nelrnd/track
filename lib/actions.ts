"use server"

import { prisma } from "@/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { fetchUser } from "./data"

export async function createHabit(
  prevState: string | undefined,
  formData: FormData
) {
  const { id } = await fetchUser()
  const name = formData.get("name") as string
  await prisma.habit.create({
    data: { name, userId: id as string },
  })

  revalidatePath("/")
  redirect("/")
  return "done"
}

export async function deleteHabit(
  prevState: string | undefined,
  formData: FormData
) {
  const { id } = await fetchUser()
  if (!id) return "User must be logged in"
  const habitId = formData.get("habitId") as string
  if (!habitId) return "Habit id is required"
  const habit = await prisma.habit.findFirst({ where: { id: habitId } })
  if (!habit) return "Habit not found"
  if (habit.userId !== id) return "Unauthorized: habit is not from user"
  await prisma.habit.delete({ where: { id: habitId } })
  revalidatePath("/")
  return "Habit deleted"
}

export async function createTrack(habitId: string) {
  const { id } = await fetchUser()
  const today = new Date(new Date().toISOString().split("T")[0])
  const track = await prisma.track.create({
    data: { habitId, userId: id as string, createdAt: today },
  })
  return track
}

export async function deleteTrack(trackId: string) {
  await prisma.track.delete({ where: { id: trackId } })
}

export async function toggleTrack(
  prevState: string | undefined,
  formData: FormData
) {
  const habitId = formData.get("habitId") as string
  const { id } = await fetchUser()
  if (!id) return
  const today = new Date(new Date().toISOString().split("T")[0])
  // check if track exists
  let track = await prisma.track.findFirst({
    where: { userId: id, habitId, createdAt: today },
  })

  if (track) {
    await deleteTrack(track.id)
  } else {
    track = await createTrack(habitId)
  }

  revalidatePath("/")
  return "done"
}
