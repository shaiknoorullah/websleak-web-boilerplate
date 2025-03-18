// // src/blocks/Button/Component.tsx
// import React from 'react'
// import { cn } from '@/utilities/ui'
// import Link from 'next/link'

// export type ButtonBlockProps = {
//   configuration: {
//     buttonType: 'button' | 'submit' | 'reset'
//     size: 'sm' | 'md' | 'lg'
//     variant: 'primary' | 'secondary' | 'outline' | 'ghost'
//   }
//   design: {
//     layout: {
//       display: string
//       flexDirection?: string
//       justifyContent?: string
//       alignItems?: string
//       gap?: number
//     }
//     style: {
//       backgroundColor: string
//       textColor: string
//       typography: {
//         fontFamily: string
//         fontSize: string
//         fontWeight: string
//         letterSpacing: string
//         lineHeight: string
//       }
//     }
//     spacing: {
//       padding: {
//         top: number
//         right: number
//         bottom: number
//         left: number
//       }
//       margin: {
//         top: number
//         right: number
//         bottom: number
//         left: number
//       }
//     }
//   }
//   content: {
//     text: string
//     link?: {
//       url?: string
//       newTab?: boolean
//       reference?: {
//         relationTo: 'pages' | 'posts'
//         value: string | number
//       }
//     }
//   }
// }

// export const ButtonBlock: React.FC<ButtonBlockProps> = (props) => {
//   console.log('Custom Button Props:\n', props)
//   const { configuration, design, content } = props
//   const { buttonType, size, variant } = configuration
//   const { layout, style, spacing } = design
//   const { text, link } = content

//   // Transform design properties into Tailwind classes
//   const displayClass =
//     layout.display === 'flex' ? 'flex' : layout.display === 'grid' ? 'grid' : 'block'

//   const flexClasses =
//     layout.display === 'flex'
//       ? [
//           layout.flexDirection === 'column' ? 'flex-col' : 'flex-row',
//           layout.justifyContent ? `justify-${layout.justifyContent.replace('flex-', '')}` : '',
//           layout.alignItems ? `items-${layout.alignItems.replace('flex-', '')}` : '',
//           layout.gap ? `gap-${layout.gap}` : '',
//         ]
//           .filter(Boolean)
//           .join(' ')
//       : ''

//   const typographyClasses = [
//     style.typography.fontFamily !== 'inherit' ? `font-${style.typography.fontFamily}` : '',
//     style.typography.fontSize !== 'inherit' ? `text-${style.typography.fontSize}` : '',
//     style.typography.fontWeight !== 'inherit' ? `font-${style.typography.fontWeight}` : '',
//     style.typography.letterSpacing !== 'inherit'
//       ? `tracking-${style.typography.letterSpacing}`
//       : '',
//     style.typography.lineHeight !== 'inherit' ? `leading-${style.typography.lineHeight}` : '',
//   ]
//     .filter(Boolean)
//     .join(' ')

//   // Size classes for the button
//   const sizeClasses =
//     {
//       sm: 'px-3 py-1.5 text-sm',
//       md: 'px-4 py-2',
//       lg: 'px-6 py-3 text-lg',
//     }[size] || 'px-4 py-2'

//   // Variant classes for the button
//   const variantClasses =
//     {
//       primary: 'bg-primary text-white hover:bg-primary-dark',
//       secondary: 'bg-secondary text-white hover:bg-secondary-dark',
//       outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
//       ghost: 'text-primary hover:bg-gray-100',
//     }[variant] || 'bg-primary text-white hover:bg-primary-dark'

//   // Custom colors if specified
//   const colorClasses = [
//     style.backgroundColor !== 'transparent' ? `bg-[${style.backgroundColor}]` : '',
//     style.textColor !== 'inherit' ? `text-[${style.textColor}]` : '',
//   ]
//     .filter(Boolean)
//     .join(' ')

//   const spacingClasses = [
//     spacing.padding.top ? `pt-[${spacing.padding.top}px]` : '',
//     spacing.padding.right ? `pr-[${spacing.padding.right}px]` : '',
//     spacing.padding.bottom ? `pb-[${spacing.padding.bottom}px]` : '',
//     spacing.padding.left ? `pl-[${spacing.padding.left}px]` : '',
//     spacing.margin.top ? `mt-[${spacing.margin.top}px]` : '',
//     spacing.margin.right ? `mr-[${spacing.margin.right}px]` : '',
//     spacing.margin.bottom ? `mb-[${spacing.margin.bottom}px]` : '',
//     spacing.margin.left ? `ml-[${spacing.margin.left}px]` : '',
//   ]
//     .filter(Boolean)
//     .join(' ')

//   const buttonClasses = cn(
//     'rounded transition-colors',
//     sizeClasses,
//     variantClasses,
//     displayClass,
//     flexClasses,
//     typographyClasses,
//     colorClasses,
//     spacingClasses,
//   )

//   // Determine if the button should be a link
//   const isLink = !!(link?.url || link?.reference)

//   // Determine the URL for links
//   let href = link?.url || ''
//   if (link?.reference) {
//     href = `/${link.reference.relationTo}/${link.reference.value}`
//   }

//   // Render a link or button based on content
//   if (isLink) {
//     return (
//       <Link
//         href={href}
//         className={buttonClasses}
//         target={link?.newTab ? '_blank' : undefined}
//         rel={link?.newTab ? 'noopener noreferrer' : undefined}
//       >
//         {text}
//       </Link>
//     )
//   }

//   return (
//     <button type={buttonType} className={buttonClasses}>
//       {text}
//     </button>
//   )
// }

// src/components/lexical/Button.tsx
import React from 'react'
import Link from 'next/link'
import { cn } from '@/utilities/ui'

// Icon components
import {
  ArrowRight,
  ArrowLeft,
  Download,
  Upload,
  ExternalLink,
  Plus,
  Minus,
  Check,
  X,
} from 'lucide-react'

// Define the props type based on the block configuration
type ButtonProps = {
  buttonType: 'button' | 'submit' | 'reset'
  text: string
  url?: string
  internalLink?: {
    value: string
    relationTo: string
  }
  newTab: boolean
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'outline-primary'
    | 'outline-secondary'
    | 'ghost'
    | 'link'
  width: 'auto' | 'full'
  hasIcon: boolean
  iconConfig?: {
    iconName:
      | 'arrow-right'
      | 'arrow-left'
      | 'download'
      | 'upload'
      | 'external-link'
      | 'plus'
      | 'minus'
      | 'check'
      | 'x'
    iconPosition: 'left' | 'right'
    iconSize: 'sm' | 'md' | 'lg'
  }
  advancedStyling?: {
    textColor?: string
    backgroundColor?: string
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'full'
    borderWidth?: '0' | '1' | '2' | '4'
    borderColor?: string
    paddingHorizontal?: '0' | '1' | '2' | '4' | '6' | '8'
    paddingVertical?: '0' | '1' | '2' | '3' | '4' | '5'
    shadow?: 'none' | 'sm' | 'md' | 'lg'
    fontWeight?: 'normal' | 'medium' | 'semibold' | 'bold'
    customClasses?: string
  }
  interactive?: {
    hoverEffect?: 'none' | 'darken' | 'lighten' | 'grow' | 'shrink' | 'raise'
    clickEffect?: 'none' | 'shrink' | 'sink'
    transitionSpeed?: 'fast' | 'normal' | 'slow'
  }
  accessibility?: {
    ariaLabel?: string
    title?: string
  }
  advanced?: {
    behavior?: 'normal' | 'smoothScroll' | 'modal'
    targetId?: string
  }
}

export const CustomButtonBlock: React.FC<ButtonProps> = ({
  buttonType = 'button',
  text,
  url,
  internalLink,
  newTab = false,
  size = 'md',
  variant = 'primary',
  width = 'auto',
  hasIcon = false,
  iconConfig,
  advancedStyling,
  interactive,
  accessibility,
  advanced,
}) => {
  // Determine if this is a link or a button
  const isLink = !!(url || internalLink)

  // Get the actual href
  const href = internalLink ? `/${internalLink.relationTo}/${internalLink.value}` : url || '#'

  // Generate size classes
  const sizeClasses =
    {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    }[size] || 'text-base'

  // Generate the appropriate padding classes
  const paddingX = advancedStyling?.paddingHorizontal
    ? `px-${advancedStyling.paddingHorizontal}`
    : {
        xs: 'px-2',
        sm: 'px-3',
        md: 'px-4',
        lg: 'px-6',
        xl: 'px-8',
      }[size] || 'px-4'

  const paddingY = advancedStyling?.paddingVertical
    ? `py-${advancedStyling.paddingVertical}`
    : {
        xs: 'py-1',
        sm: 'py-1.5',
        md: 'py-2',
        lg: 'py-2.5',
        xl: 'py-3',
      }[size] || 'py-2'

  // Generate variant classes
  const variantClasses =
    {
      primary: 'bg-blue-600 text-white hover:bg-blue-700',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700',
      success: 'bg-green-600 text-white hover:bg-green-700',
      danger: 'bg-red-600 text-white hover:bg-red-700',
      warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
      info: 'bg-cyan-500 text-white hover:bg-cyan-600',
      light: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
      dark: 'bg-gray-800 text-white hover:bg-gray-900',
      'outline-primary': 'bg-transparent text-blue-600 border border-blue-600 hover:bg-blue-50',
      'outline-secondary': 'bg-transparent text-gray-600 border border-gray-600 hover:bg-gray-50',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100',
      link: 'bg-transparent text-blue-600 hover:underline p-0',
    }[variant] || 'bg-blue-600 text-white hover:bg-blue-700'

  // Generate border radius classes
  const borderRadiusClass = advancedStyling?.borderRadius
    ? {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded',
        lg: 'rounded-lg',
        full: 'rounded-full',
      }[advancedStyling.borderRadius]
    : 'rounded'

  // Generate border width classes
  const borderWidthClass =
    advancedStyling?.borderWidth && advancedStyling.borderWidth !== '0'
      ? `border-${advancedStyling.borderWidth}`
      : variant.startsWith('outline')
        ? 'border'
        : ''

  // Generate shadow classes
  const shadowClass = advancedStyling?.shadow
    ? {
        none: '',
        sm: 'shadow-sm',
        md: 'shadow',
        lg: 'shadow-lg',
      }[advancedStyling.shadow]
    : ''

  // Generate font weight classes
  const fontWeightClass = advancedStyling?.fontWeight
    ? {
        normal: 'font-normal',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold',
      }[advancedStyling.fontWeight]
    : 'font-medium'

  // Width classes
  const widthClass = width === 'full' ? 'w-full' : ''

  // Hover effect classes
  const hoverEffectClass = interactive?.hoverEffect
    ? {
        none: '',
        darken: 'hover:brightness-90',
        lighten: 'hover:brightness-110',
        grow: 'hover:scale-105',
        shrink: 'hover:scale-95',
        raise: 'hover:shadow-lg',
      }[interactive.hoverEffect]
    : 'hover:brightness-90'

  // Click effect classes
  const clickEffectClass = interactive?.clickEffect
    ? {
        none: '',
        shrink: 'active:scale-95',
        sink: 'active:translate-y-1',
      }[interactive.clickEffect]
    : 'active:scale-95'

  // Transition speed classes
  const transitionSpeedClass = interactive?.transitionSpeed
    ? {
        fast: 'transition-all duration-150',
        normal: 'transition-all duration-300',
        slow: 'transition-all duration-500',
      }[interactive.transitionSpeed]
    : 'transition-all duration-300'

  // Custom inline styles for color overrides
  const customStyles: React.CSSProperties = {
    ...(advancedStyling?.textColor ? { color: advancedStyling.textColor } : {}),
    ...(advancedStyling?.backgroundColor
      ? { backgroundColor: advancedStyling.backgroundColor }
      : {}),
    ...(advancedStyling?.borderColor ? { borderColor: advancedStyling.borderColor } : {}),
  }

  // Select the right icon component based on configuration
  const IconComponent =
    hasIcon && iconConfig
      ? {
          'arrow-right': ArrowRight,
          'arrow-left': ArrowLeft,
          download: Download,
          upload: Upload,
          'external-link': ExternalLink,
          plus: Plus,
          minus: Minus,
          check: Check,
          x: X,
        }[iconConfig.iconName]
      : null

  // Size for the icon
  const iconSizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  const iconSize = IconComponent && iconConfig ? iconSizeMap[iconConfig.iconSize || 'md'] : 20

  // Handle special behaviors
  const handleClick = (e: React.MouseEvent) => {
    if (advanced?.behavior === 'smoothScroll' && advanced.targetId) {
      e.preventDefault()
      const element = document.getElementById(advanced.targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else if (advanced?.behavior === 'modal' && advanced.targetId) {
      e.preventDefault()
      // Modal opening logic would go here
      const modal = document.getElementById(advanced.targetId)
      if (modal) {
        // This is just a placeholder - actual implementation would depend on your modal system
        modal.style.display = 'flex'
      }
    }
  }

  // Combine all classes
  const buttonClasses = cn(
    // Base button classes
    'inline-flex items-center justify-center',
    sizeClasses,
    paddingX,
    paddingY,
    variantClasses,
    borderRadiusClass,
    borderWidthClass,
    shadowClass,
    fontWeightClass,
    widthClass,

    // Interactive classes
    hoverEffectClass,
    clickEffectClass,
    transitionSpeedClass,

    // Custom classes
    advancedStyling?.customClasses,
  )

  // Content with icon
  const content = (
    <>
      {hasIcon && IconComponent && iconConfig?.iconPosition === 'left' && (
        <IconComponent size={iconSize} className="mr-2 flex-shrink-0" />
      )}
      <span>{text}</span>
      {hasIcon && IconComponent && iconConfig?.iconPosition === 'right' && (
        <IconComponent size={iconSize} className="ml-2 flex-shrink-0" />
      )}
    </>
  )

  // Render as link or button based on configuration
  if (isLink) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={buttonClasses}
        style={customStyles}
        aria-label={accessibility?.ariaLabel || text}
        title={accessibility?.title}
        onClick={handleClick}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type={buttonType}
      className={buttonClasses}
      style={customStyles}
      aria-label={accessibility?.ariaLabel || text}
      title={accessibility?.title}
      onClick={handleClick}
    >
      {content}
    </button>
  )
}
