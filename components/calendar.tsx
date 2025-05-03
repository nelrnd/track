import { Year } from "@/lib/types"

export default function Calendar({ year }: { year: Year }) {
  return (
    <div className="max-w-[300px] m-auto mt-8 space-y-8">
      <h2>{year.title}</h2>

      {year.months.map((month, index) => (
        <div key={index}>
          <h3 className="capitalize mb-4">{month.title}</h3>
          <div className="grid grid-cols-7 gap-3">
            {[...Array(month.startsAt).keys()].map((filler) => (
              <div key={filler}></div>
            ))}
            {[...Array(month.daysCount).keys()]
              .map((day) => day + 1)
              .map((day, index) => (
                <div
                  key={index}
                  className="w-full aspect-square border border-gray-700 rounded"
                ></div>
              ))}
          </div>
        </div>
      ))}
    </div>
  )
}
