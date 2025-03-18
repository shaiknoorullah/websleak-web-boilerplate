// src/fields/ColorPicker/ColorPickerField.tsx
'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { FieldError, FieldLabel, useField } from '@payloadcms/ui'

interface ColorPickerProps {
  path: string
  label: string
  required?: boolean
}

// Predefined color palette for quick selection
const predefinedColors = [
  '#1e293b', // slate-800
  '#475569', // slate-600
  '#94a3b8', // slate-400
  '#f8fafc', // slate-50
  '#dc2626', // red-600
  '#16a34a', // green-600
  '#2563eb', // blue-600
  '#d97706', // amber-600
  '#8b5cf6', // violet-600
  '#ec4899', // pink-600
]

export const ColorPickerField: React.FC<ColorPickerProps> = (props) => {
  const { path, label, required } = props
  const { value = '', setValue, showError, errorMessage } = useField<string>({ path })

  // Local state for the color
  const [color, setColor] = useState<string>(value || '')
  const [isOpen, setIsOpen] = useState<boolean>(false)

  // Update local state when the field value changes
  useEffect(() => {
    setColor(value || '')
  }, [value])

  // Update the field value when the color changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newColor = e.target.value
      setColor(newColor)
      setValue(newColor)
    },
    [setValue],
  )

  // Select a predefined color
  const selectColor = useCallback(
    (selectedColor: string) => {
      setColor(selectedColor)
      setValue(selectedColor)
    },
    [setValue],
  )

  return (
    <div className="field-type color-picker">
      <FieldLabel htmlFor={path} label={label} required={required} />

      <div className="flex gap-2">
        <div
          className="w-10 h-10 rounded border border-gray-300 cursor-pointer flex-shrink-0"
          style={{ backgroundColor: color || 'transparent' }}
          onClick={() => setIsOpen(true)}
        />

        <input
          id={path}
          type="text"
          value={color}
          onChange={handleChange}
          className="w-full px-2 py-1 border border-gray-300 rounded"
          placeholder="#RRGGBB or rgba(r,g,b,a)"
        />

        <Popover open={isOpen} onOpenChange={setIsOpen}>
          <PopoverTrigger asChild>
            <button type="button" className="px-2 py-1 border border-gray-300 rounded bg-white">
              Select
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-3">
            <div className="mb-3">
              <label htmlFor={`${path}-color-input`} className="block text-sm font-medium mb-1">
                Color
              </label>
              <input
                id={`${path}-color-input`}
                type="color"
                value={color}
                onChange={handleChange}
                className="w-full h-8"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Palette</label>
              <div className="grid grid-cols-5 gap-2">
                {predefinedColors.map((presetColor) => (
                  <button
                    key={presetColor}
                    type="button"
                    className="w-8 h-8 rounded border border-gray-300"
                    style={{ backgroundColor: presetColor }}
                    onClick={() => selectColor(presetColor)}
                    aria-label={`Select color ${presetColor}`}
                  />
                ))}
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {showError && <FieldError message={errorMessage} />}
    </div>
  )
}

export default ColorPickerField
