import { createYear, getDaysCount, isLeapYear } from "@/lib/utils"

describe("createYear fn", () => {
  it("create a year with 12 months", () => {
    const year = createYear(2025)
    expect(year.title).toBe(2025)
    expect(year.months.length).toBe(12)
  })
  it("first month to be january", () => {
    const year = createYear(2025)
    expect(year.months.at(0)?.title).toBe("january")
  })
  it("last month to be december", () => {
    const year = createYear(2025)
    expect(year.months.at(-1)?.title).toBe("december")
  })
  it("third month to be march", () => {
    const year = createYear(2025)
    expect(year.months.at(2)?.title).toBe("march")
  })
  it("total nb of days to be 365", () => {
    const year = createYear(2025)
    expect(year.months.reduce((prev, curr) => prev + curr.daysCount, 0)).toBe(
      365
    )
  })
  it("total nb of days to be 366 on leap year", () => {
    const year = createYear(2000)
    expect(year.months.reduce((prev, curr) => prev + curr.daysCount, 0)).toBe(
      366
    )
  })
})

describe("isLeapYear fn", () => {
  it("expect 2024 to be leap year", () => {
    expect(isLeapYear(2024)).toBe(true)
  })
  it("expect 2028 to be leap year", () => {
    expect(isLeapYear(2028)).toBe(true)
  })
  it("expect 2032 to be leap year", () => {
    expect(isLeapYear(2032)).toBe(true)
  })
  it("expect 2096 to be leap year", () => {
    expect(isLeapYear(2096)).toBe(true)
  })
  it("expect 1600 to be leap year", () => {
    expect(isLeapYear(1600)).toBe(true)
  })
  it("expect 2025 not to be leap year", () => {
    expect(isLeapYear(2025)).toBe(false)
  })
  it("expect 2033 not to be leap year", () => {
    expect(isLeapYear(2033)).toBe(false)
  })
  it("expect 1700 not to be leap year", () => {
    expect(isLeapYear(1700)).toBe(false)
  })
})

describe("getDaysCount fn", () => {
  it("returns 31 for january 2025", () => {
    expect(getDaysCount(0, 2025)).toBe(31)
  })
  it("returns 28 for february 2025", () => {
    expect(getDaysCount(1, 2025)).toBe(28)
  })
  it("returns 31 for december 2025", () => {
    expect(getDaysCount(11, 2025)).toBe(31)
  })
  it("returns 31 for august 2025", () => {
    expect(getDaysCount(7, 2025)).toBe(31)
  })
  it("returns 29 for february 2000", () => {
    expect(getDaysCount(1, 2000)).toBe(29)
  })
  it("returns 31 for march 2000", () => {
    expect(getDaysCount(2, 2000)).toBe(31)
  })
  it("returns 30 for november 2025", () => {
    expect(getDaysCount(10, 2025)).toBe(30)
  })
})
