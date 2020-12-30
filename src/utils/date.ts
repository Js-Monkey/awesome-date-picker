export function getYear(date: Date = new Date()): number {
  return date.getFullYear()
}

export function getMonth(date: Date = new Date()): number {
  return date.getMonth() + 1
}

export function getDay(date: Date = new Date()): number {
  return date.getDate()
}

export function getDate(year: number, month: number, day: number): Date {
  return new Date(joinDate(year, month, day))
}

export function daysInAMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate()
}

export function getMinInTen(num: number): number {
  return num - Number(num.toString().slice(-1))
}

export function monthFirstDay(year: number, month: number): number {
  let firstDate = new Date(`${year}/${month}/01`).getDay()
  if (firstDate === 0) firstDate = 7
  return firstDate
}

export function joinDate<T = number, U = string>(year: T | U, month: T | U, day: T | U): string {
  return year + '/' + month + '/' + day
}

export function transformDate(date: Date): string {
  return joinDate(getYear(date), getMonth(date), getDay(date))
}

export function getPreMonth<T = number>(m: number, y: number): any {
  let month = --m
  if (month === 0) {
    month = 12
    ++y
  }
  return {
    preMonth: month,
    preYear: y
  }
}
