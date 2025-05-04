"use client"

import { Habit, Track } from "@/generated/prisma"
import { createCalendarTimeline } from "@/lib/utils"
import clsx from "clsx"
import { useLayoutEffect, useRef } from "react"

export default function Calendar({
  habits,
  tracks,
}: {
  habits: Habit[]
  tracks: Track[]
}) {
  const timeline = createCalendarTimeline()
  const todayElem = useRef<HTMLDivElement>(null)

  function scrollTodayIntoView(behavior: ScrollBehavior = "instant") {
    if (todayElem.current) {
      todayElem.current.scrollIntoView({ block: "center", behavior })
    }
  }

  useLayoutEffect(() => {
    scrollTodayIntoView()
  }, [])

  return (
    <div
      className="absolute inset-0 overflow-y-scroll m-auto no-scrollbar"
      suppressHydrationWarning
    >
      <div className="fixed bottom-4 left-4 p-4 border border-gray-700">
        <button onClick={() => scrollTodayIntoView("smooth")}>Today</button>
      </div>
      <div>
        {/* YEAR */}
        {timeline.map((year) => {
          const todayThisYear =
            new Date().getUTCFullYear() === parseInt(year.title)

          return (
            <div
              key={year.title}
              className="relative grid grid-cols-[80px_300px_80px] m-auto w-fit mb-12"
            >
              <div>
                <h2 className="font-bold sticky top-[calc(85px+16px)] w-fit">
                  {year.title}
                </h2>
              </div>
              <div className="space-y-12">
                {/* MONTH */}
                {year.months.map((month, monthIndex) => {
                  const todayThisMonth =
                    todayThisYear && new Date().getUTCMonth() === monthIndex

                  return (
                    <div key={year.title + "-" + month.title}>
                      <h3 className="font-bold mb-4 capitalize">
                        {month.title}
                      </h3>
                      <div className="grid grid-cols-7 gap-3">
                        {[...Array(month.startsAt).keys()].map((filler) => (
                          <div key={"fillter-" + filler}></div>
                        ))}
                        {/* DAY */}
                        {[
                          ...Array(month.daysCount)
                            .keys()
                            .map((day) => day + 1),
                        ].map((day) => {
                          const todayThisDay =
                            todayThisMonth && day === new Date().getUTCDate()

                          const date = `${year.title}-${(monthIndex + 1).toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`

                          const filteredHabits = habits.filter(
                            (habit) =>
                              habit.createdAt.toISOString().split("T")[0] <=
                              date
                          )

                          const mappedTracks = filteredHabits
                            .map((habit) =>
                              tracks.find(
                                (track) =>
                                  track.habitId === habit.id &&
                                  track.createdAt
                                    .toISOString()
                                    .split("T")[0] === date
                              )
                            )
                            .filter((track) => !!track)

                          const validated =
                            !!filteredHabits.length &&
                            mappedTracks.length === filteredHabits.length

                          return (
                            <div
                              {...(todayThisDay ? { ref: todayElem } : {})}
                              key={year + "-" + month.title + "-" + day}
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
