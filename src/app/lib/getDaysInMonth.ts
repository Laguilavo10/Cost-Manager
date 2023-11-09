export function getDaysInMonth(month: number | string, year: number | string) {
  return new Date(Number(year), Number(month), 0).getDate()
}
