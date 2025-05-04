import { fetchHabits } from "@/lib/data"
import { TrackButton } from "./buttons"
import { isToday } from "@/lib/utils"

export default async function HabitList() {
  const habits = await fetchHabits()

  return (
    <div>
      <h2 className="font-bold mb-2">Habits</h2>
      <ul>
        {habits.map((habit) => {
          const tracked =
            !!habit.tracks.length && isToday(habit.tracks[0].createdAt)
          return (
            <li key={habit.id} className="list-disc flex items-center gap-3">
              <h3>{habit.name}</h3>
              <TrackButton habitId={habit.id} tracked={tracked} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
