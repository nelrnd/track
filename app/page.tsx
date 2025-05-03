import Calendar from "@/components/calendar"
import { createYear } from "@/lib/utils"

const year = createYear(2000)

export default function Home() {
  return (
    <main>
      <Calendar year={year} />
    </main>
  )
}
