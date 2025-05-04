import HabitForm from "@/components/habit-form"

export default function Page() {
  return (
    <main className="max-w-[600px] m-auto mt-[calc(85px+32px)]">
      <h1 className="text-xl font-bold mb-6">Create habit</h1>
      <HabitForm />
    </main>
  )
}
