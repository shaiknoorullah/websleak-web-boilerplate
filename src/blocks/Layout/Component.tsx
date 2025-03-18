// src/blocks/Layout/Component.tsx
import React, { JSX } from 'react'
import { cn } from '@/utilities/ui'
import { RenderElement } from '../RenderElement'

export type LayoutBlockProps = {
  configuration: {
    layoutType: 'container' | 'section' | 'div' | 'article' | 'aside'
  }
  design: {
    layout: {
      display: string
      flexDirection?: string
      justifyContent?: string
      alignItems?: string
      gap?: number
    }
    style: {
      backgroundColor: string
      textColor: string
    }
    spacing: {
      padding: {
        top: number
        right: number
        bottom: number
        left: number
      }
      margin: {
        top: number
        right: number
        bottom: number
        left: number
      }
    }
  }
  content: {
    elements: any[]
  }
}

export const LayoutBlock: React.FC<LayoutBlockProps> = (props) => {
  const { configuration, design, content } = props
  const { layoutType } = configuration
  const { layout, style, spacing } = design
  const { elements } = content

  // Transform design properties into Tailwind classes
  const displayClass =
    layout.display === 'flex' ? 'flex' : layout.display === 'grid' ? 'grid' : 'block'

  const flexClasses =
    layout.display === 'flex'
      ? [
          layout.flexDirection === 'column' ? 'flex-col' : 'flex-row',
          layout.justifyContent ? `justify-${layout.justifyContent.replace('flex-', '')}` : '',
          layout.alignItems ? `items-${layout.alignItems.replace('flex-', '')}` : '',
          layout.gap ? `gap-${layout.gap}` : '',
        ]
          .filter(Boolean)
          .join(' ')
      : ''

  const gridClasses =
    layout.display === 'grid'
      ? [
          layout.gap ? `gap-${layout.gap}` : '',
          // Add more grid specific classes as needed
        ]
          .filter(Boolean)
          .join(' ')
      : ''

  const colorClasses = [
    style.backgroundColor !== 'transparent' ? `bg-[${style.backgroundColor}]` : '',
    style.textColor !== 'inherit' ? `text-[${style.textColor}]` : '',
  ]
    .filter(Boolean)
    .join(' ')

  const spacingClasses = [
    spacing.padding.top ? `pt-[${spacing.padding.top}px]` : '',
    spacing.padding.right ? `pr-[${spacing.padding.right}px]` : '',
    spacing.padding.bottom ? `pb-[${spacing.padding.bottom}px]` : '',
    spacing.padding.left ? `pl-[${spacing.padding.left}px]` : '',
    spacing.margin.top ? `mt-[${spacing.margin.top}px]` : '',
    spacing.margin.right ? `mr-[${spacing.margin.right}px]` : '',
    spacing.margin.bottom ? `mb-[${spacing.margin.bottom}px]` : '',
    spacing.margin.left ? `ml-[${spacing.margin.left}px]` : '',
  ]
    .filter(Boolean)
    .join(' ')

  const className = cn(displayClass, flexClasses, gridClasses, colorClasses, spacingClasses)

  // Map the layoutType to the correct HTML element
  const Tag = layoutType as keyof JSX.IntrinsicElements

  // Special handling for container type
  const isContainer = layoutType === 'container'
  const containerClass = isContainer ? 'container mx-auto px-4' : ''

  return (
    <Tag className={cn(className, containerClass)}>
      {elements?.map((element, index) => <RenderElement key={index} element={element} />)}
    </Tag>
  )
}
