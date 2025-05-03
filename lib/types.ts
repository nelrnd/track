export type Year = {
  title: string
  months: Month[]
}

export type Month = {
  title: string
  daysCount: number
  startsAt: number
}
