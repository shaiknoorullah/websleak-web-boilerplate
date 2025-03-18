'use client'
import React, { useState } from 'react'
import { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import { Label } from '@/components/ui/label'
import { UploadCloud } from 'lucide-react'
import { Width } from '../Width'
import { Error } from '../Error'
import { FileField } from './types'

type FileComponentProps = FileField & {
  errors: Partial<FieldErrorsImpl<FieldValues>>
  register: UseFormRegister<FieldValues>
  required?: boolean
  width?: number
}

export const File: React.FC<FileComponentProps> = ({
  name,
  label,
  errors,
  register,
  required = false,
  width,
  accept = 'image/*,.pdf',
  maxSize = 5242880,
}) => {
  const [fileName, setFileName] = useState<string | null>(null)

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

      <div className="flex flex-col items-center mt-1">
        <input
          type="file"
          id={name}
          className="hidden"
          accept={accept}
          {...register(name, {
            required,
            validate: (fileList: FileList) => {
              console.log('file:', fileList)
              if (!required && (!fileList || fileList.length === 0)) return true
              if (required && (!fileList || fileList.length === 0)) return 'File is required'

              // Check file size if maxSize is provided
              if ((maxSize && fileList[0]?.size) ?? 0 > maxSize) {
                return `File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`
              }

              return true
            },
          })}
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0 && e.target.files[0]) {
              setFileName(e.target.files[0].name)
            } else {
              setFileName(null)
            }
          }}
        />

        <Label
          htmlFor={name}
          className="cursor-pointer w-full border-2 border-dashed border-border rounded-md p-6 flex flex-col items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <UploadCloud className="h-10 w-10 text-slate-400 mb-2" />
          <span className="text-sm font-medium text-slate-900 mb-1">
            {fileName ? fileName : 'Click to upload file'}
          </span>
          <span className="text-xs text-slate-500">
            {fileName
              ? 'Click to change file'
              : accept === 'image/*,.pdf'
                ? 'SVG, PNG, JPG or PDF'
                : accept.replace(/\./g, '').toUpperCase()}
            {maxSize && ` (max. ${Math.round(maxSize / 1024 / 1024)}MB)`}
          </span>
        </Label>
      </div>

      {errors[name] && <Error name={name} />}
    </Width>
  )
}
