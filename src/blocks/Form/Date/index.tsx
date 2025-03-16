'use client'
import React from 'react'
import { Controller, Control, FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { CalendarIcon } from 'lucide-react'
import { format } from 'date-fns'
import { cn } from '@/utilities/ui'
import { Label } from '@/components/ui/label'
import { Width } from '../Width'
import { Error } from '../Error'
import { DateField } from './types'
import { isValidDateInput } from '@/utilities/validateDate'

type DateComponentProps = DateField & {
  errors: Partial<FieldErrorsImpl<FieldValues>>
  register: UseFormRegister<FieldValues>
  control: Control<FieldValues>
  required?: boolean
  width?: number
}

// NOTE:
// Deviating away from the convention and naming this `DateComponent` instead of `Date`
// to avoid naming conflicts with `Date` Class or Type
export const DateComponent: React.FC<DateComponentProps> = ({
  name,
  label,
  defaultValue,
  errors,
  register,
  control,
  required = false,
  width,
}) => {
  register(name, { required })
  console.log('HELLOOO')
  return (
    <Width width={width}>
      <Label htmlFor={name}>
        {label}
        {required && (
          <span className="required">
            * <span className="sr-only">(required)</span>
          </span>
        )}
      </Label>

      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue || ''}
        render={({ field }) => {
          // validate the date value is infact a date
          const dateValue = isValidDateInput(field.value) ? new Date(field.value as string) : null

          return (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    'w-full justify-start text-left font-normal',
                    !field.value && 'text-muted-foreground',
                  )}
                  id={name}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateValue ? format(dateValue, 'PPP') : <span>Select a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateValue || undefined}
                  onSelect={(date) => {
                    field.onChange(date ? date.toISOString() : '')
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          )
        }}
      />

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
