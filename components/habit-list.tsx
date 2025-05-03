import { fetchHabits } from "@/lib/data"

export default async function HabitList() {
  const habits = await fetchHabits()

  return (
    <div>
      <h2 className="font-bold mb-2">Habits</h2>
      <ul className="list-disc pl-4">
        {habits.map((habit) => (
          <li key={habit.id}>{habit.name}</li>
        ))}
      </ul>
    </div>
  )
}
