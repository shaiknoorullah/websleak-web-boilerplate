/**
 * Date format options for displaying dates in the UI
 */
export type DateFormat =
  | 'MM/dd/yyyy' // US format (e.g., 12/31/2023)
  | 'dd/MM/yyyy' // European format (e.g., 31/12/2023)
  | 'yyyy-MM-dd' // ISO format (e.g., 2023-12-31)
  | 'MMMM d, yyyy' // Long format (e.g., December 31, 2023)
  | 'd MMMM yyyy' // European long format (e.g., 31 December 2023)
  | 'PPP' // Locale-specific format
  | string // Custom format string

/**
 * Interface for configuring a date picker field in Payload CMS forms
 */
export interface DateField {
  /**
   * Optional name for the block, used for identification in the admin UI
   */
  blockName?: string

  /**
   * Type identifier for the field block
   */
  blockType: 'date'

  /**
   * Default date value
   * Can be ISO string, Date object serialized to string, or any valid date string
   * @example '2023-12-31' - ISO format date
   * @example '2023-12-31T00:00:00.000Z' - ISO datetime
   */
  defaultValue?: string

  /**
   * Display label for the date field
   */
  label?: string

  /**
   * Unique identifier for the field, used in form submission data
   */
  name: string

  /**
   * Whether the date selection is required to submit the form
   */
  required?: boolean

  /**
   * Width of the field as a percentage (1-100)
   */
  width?: number

  /**
   * Optional display format for the selected date
   * Uses date-fns format strings
   * @default 'PPP' - Locale-specific format
   */
  displayFormat?: DateFormat

  /**
   * Optional minimum selectable date (ISO string)
   * @example '2023-01-01' - Dates before January 1, 2023 cannot be selected
   */
  minDate?: string

  /**
   * Optional maximum selectable date (ISO string)
   * @example '2023-12-31' - Dates after December 31, 2023 cannot be selected
   */
  maxDate?: string

  /**
   * Optional placeholder text when no date is selected
   * @default 'Select a date'
   */
  placeholder?: string
}
