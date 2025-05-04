"use client"

import { createHabit } from "@/lib/actions"
import { useActionState } from "react"

export default function HabitForm() {
  const [, action, pending] = useActionState(createHabit, undefined)

  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="block mt-2 border border-gray-700 h-[35px] px-4 rounded"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="h-[35px] flex justify-center items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700/20 cursor-pointer transition-colors disabled:opacity-50"
      >
        Create
      </button>
    </form>
  )
}
