import Calendar from "@/components/calendar"
import { createYear } from "@/lib/utils"

const year = createYear(2025)

export default function Home() {
  return (
    <main>
      <Calendar year={year} />
    </main>
  )
}
