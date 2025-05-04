import Calendar from "@/components/calendar"
import HabitList from "@/components/habit-list"
import { fetchHabits, fetchTracks } from "@/lib/data"
import { createYear } from "@/lib/utils"

const year = createYear(2025)

export default async function Home() {
  const [habits, tracks] = await Promise.all([fetchHabits(), fetchTracks()])
  return (
    <main className="max-w-[600px] m-auto my-8">
      <HabitList habits={habits} />
      <Calendar year={year} habits={habits} tracks={tracks} />
    </main>
  )
}
