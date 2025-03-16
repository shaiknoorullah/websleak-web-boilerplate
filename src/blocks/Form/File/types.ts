/**
 * Common file types that can be accepted in file upload fields
 */
export type AcceptedFileType =
  | 'image/*' // All image types
  | 'image/jpeg' // JPEG images
  | 'image/png' // PNG images
  | 'image/gif' // GIF images
  | 'image/svg+xml' // SVG images
  | 'application/pdf' // PDF documents
  | 'application/msword' // Word documents
  | 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' // DOCX
  | 'application/vnd.ms-excel' // Excel spreadsheets
  | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' // XLSX
  | 'text/plain' // Plain text
  | 'text/csv' // CSV files
  | 'video/*' // All video types
  | 'audio/*' // All audio types
  | string // Custom mime types or extensions

/**
 * Interface for configuring a file upload field in Payload CMS forms
 */
export interface FileField {
  /**
   * Optional name for the block, used for identification in the admin UI
   */
  blockName?: string

  /**
   * Type identifier for the field block
   */
  blockType: 'file'

  /**
   * Display label for the file upload field
   */
  label?: string

  /**
   * Unique identifier for the field, used in form submission data
   */
  name: string

  /**
   * Whether the file upload is required to submit the form
   */
  required?: boolean

  /**
   * Width of the field as a percentage (1-100)
   */
  width?: number

  /**
   * File types that are accepted by the upload field
   * Can be mime types (e.g., 'image/jpeg') or file extensions (e.g., '.jpg,.png')
   * Multiple types can be specified with commas (e.g., 'image/*,.pdf')
   * @example 'image/*,.pdf' - Accept all images and PDFs
   * @example '.jpg,.png,.gif' - Accept specific image formats
   * @example 'application/pdf' - Accept only PDFs
   */
  accept?: AcceptedFileType | string

  /**
   * Maximum allowed file size in bytes
   * @example 5242880 - 5MB (5 * 1024 * 1024)
   * @example 1048576 - 1MB (1 * 1024 * 1024)
   * @example 10485760 - 10MB (10 * 1024 * 1024)
   */
  maxSize?: number
}
