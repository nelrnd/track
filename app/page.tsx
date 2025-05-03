import Calendar from "@/components/calendar"
import Navbar from "@/components/navbar"
import SignIn from "@/components/sign-in"
import { createYear } from "@/lib/utils"

const year = createYear(2025)

export default function Home() {
  return (
    <main>
      <Calendar year={year} />
    </main>
  )
}
