import { Track } from "@/generated/prisma"
import { Year } from "@/lib/types"
import clsx from "clsx"

export default function Calendar({
  year,
  tracks,
}: {
  year: Year
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

      {year.months.map((month, index) => {
        const todayThisMonth = todayThisYear && today.month === index
        return (
          <div key={index}>
            <h3 className="capitalize mb-4">{month.title}</h3>
            <div className="grid grid-cols-7 gap-3">
              {[...Array(month.startsAt).keys()].map((filler) => (
                <div key={filler}></div>
              ))}
              {[...Array(month.daysCount).keys()]
                .map((day) => day + 1)
                .map((day, index) => {
                  const todayThisDay = todayThisMonth && today.day === day
                  return (
                    <div
                      key={index}
                      className={clsx("w-full aspect-square rounded", {
                        "border border-gray-700": !todayThisDay,
                        "border-2 border-white": todayThisDay,
                      })}
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
