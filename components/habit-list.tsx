import { DeleteHabitButton, TrackButton } from "./buttons"
import { isToday } from "@/lib/utils"
import { HabitsWithLastTrack } from "@/lib/types"

export default async function HabitList({
  habits,
}: {
  habits: HabitsWithLastTrack[]
}) {
  return (
    <div className="fixed top-40 left-4 z-20">
      <h2 className="font-bold mb-2">Habits</h2>
      <ul>
        {habits.map((habit) => {
          const tracked =
            !!habit.tracks.length && isToday(habit.tracks[0].createdAt)
          return (
            <li key={habit.id} className="list-disc flex items-center gap-3">
              <h3>{habit.name}</h3>
              <TrackButton habitId={habit.id} tracked={tracked} />
              <DeleteHabitButton habitId={habit.id} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
