"use client"

import { toggleTrack } from "@/lib/actions"
import { useActionState } from "react"

export function TrackButton({ habitId }: { habitId: string }) {
  const [state, action, pending] = useActionState(toggleTrack, undefined)

  return (
    <form action={action}>
      <input type="hidden" name="habitId" value={habitId} />
      <button
        disabled={pending}
        className="h-[35px] flex justify-center items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700/20 cursor-pointer transition-colors disabled:opacity-50"
      >
        Track
      </button>
    </form>
  )
}
