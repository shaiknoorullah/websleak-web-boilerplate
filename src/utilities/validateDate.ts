export const isValidDateInput = (value: unknown): value is string | Date => {
  if (value instanceof Date) return true
  if (typeof value !== 'string') return false
  return !isNaN(Date.parse(value))
}
