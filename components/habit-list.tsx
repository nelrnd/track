import { fetchHabits } from "@/lib/data"
import { TrackButton } from "./buttons"

export default async function HabitList() {
  const habits = await fetchHabits()

  return (
    <div>
      <h2 className="font-bold mb-2">Habits</h2>
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="list-disc flex items-center gap-3">
            <h3>{habit.name}</h3>
            <TrackButton habitId={habit.id} />
          </li>
        ))}
      </ul>
    </div>
  )
}
