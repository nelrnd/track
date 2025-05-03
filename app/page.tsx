import Calendar from "@/components/calendar"
import HabitList from "@/components/habit-list"
import Navbar from "@/components/navbar"
import SignIn from "@/components/sign-in"
import { createYear } from "@/lib/utils"

const year = createYear(2025)

export default function Home() {
  return (
    <main className="max-w-[600px] m-auto my-8">
      <HabitList />
      <Calendar year={year} />
    </main>
  )
}
