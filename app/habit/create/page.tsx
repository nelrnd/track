import HabitForm from "@/components/habit-form"

export default function Page() {
  return (
    <main className="max-w-[600px] m-auto mt-8">
      <h1 className="text-xl font-bold">Create habit</h1>
      <HabitForm />
    </main>
  )
}
