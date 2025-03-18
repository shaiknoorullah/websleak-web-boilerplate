// src/blocks/Heading/Component.tsx
import React, { JSX } from 'react'
import { cn } from '@/utilities/ui'

export type HeadingBlockProps = {
  configuration: {
    level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  }
  design: {
    layout: {
      display: string
      // other layout properties
    }
    style: {
      backgroundColor: string
      textColor: string
      typography: {
        fontFamily: string
        fontSize: string
        fontWeight: string
        letterSpacing: string
        lineHeight: string
      }
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
    text: string
    seo?: {
      includeInTOC: boolean
      id?: string
    }
  }
}

export const HeadingBlock: React.FC<HeadingBlockProps> = (props) => {
  const { configuration, design, content } = props
  const { level } = configuration
  const { layout, style, spacing } = design
  const { text, seo } = content

  // Transform design properties into Tailwind classes
  const displayClass = `${layout.display === 'flex' ? 'flex' : layout.display === 'grid' ? 'grid' : 'block'}`

  const typographyClasses = [
    style.typography.fontFamily !== 'inherit' ? `font-${style.typography.fontFamily}` : '',
    style.typography.fontSize !== 'inherit' ? `text-${style.typography.fontSize}` : '',
    style.typography.fontWeight !== 'inherit' ? `font-${style.typography.fontWeight}` : '',
    style.typography.letterSpacing !== 'inherit'
      ? `tracking-${style.typography.letterSpacing}`
      : '',
    style.typography.lineHeight !== 'inherit' ? `leading-${style.typography.lineHeight}` : '',
  ]
    .filter(Boolean)
    .join(' ')

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

  const className = cn(displayClass, typographyClasses, colorClasses, spacingClasses)

  const HeadingTag = level as keyof JSX.IntrinsicElements
  const id = seo?.id || (seo?.includeInTOC ? text.toLowerCase().replace(/\s+/g, '-') : undefined)

  return (
    <HeadingTag className={className} id={id}>
      {text}
    </HeadingTag>
  )
}
