import { Habit, Track } from "@/generated/prisma"
import { Year } from "@/lib/types"
import { formatDateYMD } from "@/lib/utils"
import clsx from "clsx"

export default function Calendar({
  year,
  habits,
  tracks,
}: {
  year: Year
  habits: Habit[]
  tracks: Track[]
}) {
  const date = new Date()
  const today = {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth(),
    day: date.getUTCDate(),
  }
  const todayThisYear = parseInt(year.title) === today.year

  return (
    <div className="max-w-[300px] m-auto mt-8 space-y-8">
      <h2>{year.title}</h2>
      <p>{tracks.length}</p>

      {year.months.map((month, monthIndex) => {
        const todayThisMonth = todayThisYear && today.month === monthIndex
        return (
          <div key={monthIndex}>
            <h3 className="capitalize mb-4">{month.title}</h3>
            <div className="grid grid-cols-7 gap-3">
              {[...Array(month.startsAt).keys()].map((filler) => (
                <div key={filler}></div>
              ))}
              {[...Array(month.daysCount).keys()]
                .map((day) => day + 1)
                .map((day, index) => {
                  const todayThisDay = todayThisMonth && today.day === day

                  const date = `${year.title}-${(monthIndex + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`

                  const filteredHabits = habits.filter(
                    (habit) =>
                      habit.createdAt.toISOString().split("T")[0] <= date
                  )

                  const mappedTracks = filteredHabits
                    .map((habit) =>
                      tracks.find(
                        (track) =>
                          track.habitId === habit.id &&
                          track.createdAt.toISOString().split("T")[0] === date
                      )
                    )
                    .filter((track) => !!track)

                  const validated =
                    !!filteredHabits.length &&
                    mappedTracks.length === filteredHabits.length

                  return (
                    <div
                      key={index}
                      className={clsx(
                        "w-full aspect-square rounded grid place-content-center text-xs text-gray-300",
                        {
                          "border border-gray-700": !todayThisDay,
                          "border-2 border-white": todayThisDay,
                          "bg-green-500": validated,
                        }
                      )}
                    ></div>
                  )
                })}
            </div>
          </div>
        )
      })}
    </div>
  )
}
