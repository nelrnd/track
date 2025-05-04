"use server"

import { auth } from "@/auth"
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
