'use-client'
import { Checkbox } from './Checkbox'
import { Country } from './Country'
import { DateComponent } from './Date'
import { Email } from './Email'
import { File } from './File'
import { Message } from './Message'
import { Number } from './Number'
import { Select } from './Select'
import { State } from './State'
import { Text } from './Text'
import { Textarea } from './Textarea'

export const fields = {
  checkbox: Checkbox,
  country: Country,
  date: DateComponent,
  file: File,
  email: Email,
  message: Message,
  number: Number,
  select: Select,
  state: State,
  text: Text,
  textarea: Textarea,
}

export * from './Date/types'
export * from './File/types'
export * from './extendedTypes'
