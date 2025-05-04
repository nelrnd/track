import { months as initialMonths } from "@/lib/constants"

export function createYear(initialYear: number) {
  if (typeof initialYear !== "number") {
    throw new Error("Initial year must be a valid number")
  }

  const year = {
    title: initialYear.toString(),
    months: initialMonths.map((month, index) => ({
      title: month,
      daysCount: getDaysCount(index, initialYear),
      startsAt: getStartsAt(index, initialYear),
    })),
  }

  return year
}

export function isLeapYear(year: number) {
  if (typeof year !== "number") {
    throw new Error("Initial year must be a valid number")
  }

  const divisibleBy4 = year % 4 === 0
  const divisibleBy100 = year % 100 === 0
  const divisibleBy400 = year % 400 === 0

  return divisibleBy4 && (!divisibleBy100 || (divisibleBy100 && divisibleBy400))
}

export function getDaysCount(monthIndex: number, year: number) {
  const leap = isLeapYear(year)

  if (monthIndex === 1 && leap) {
    return 29
  } else if (monthIndex === 1) {
    return 28
  } else if (
    (monthIndex < 7 && monthIndex % 2 === 0) ||
    (monthIndex >= 7 && monthIndex % 2 === 1)
  ) {
    return 31
  } else {
    return 30
  }
}

export function getStartsAt(monthIndex: number, year: number) {
  return new Date(
    `${(monthIndex + 1).toString().padStart(2, "0")}-01-${year}`
  ).getUTCDay()
}

export function isToday(date: Date) {
  return (
    date.toString() ===
    new Date(new Date().toISOString().split("T")[0]).toString()
  )
}

export function formatDateYMD(date: Date) {
  return date.toISOString().split("T")[0]
}
