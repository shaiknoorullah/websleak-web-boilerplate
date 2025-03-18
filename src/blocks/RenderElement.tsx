// src/blocks/RenderElement.tsx
import React from 'react'
import { HeadingBlock } from './Heading/Component'
import { ButtonBlock } from './Button/Component'
import { LayoutBlock } from './Layout/Component'

export const RenderElement: React.FC<{
  element: any // Type would be more specific in a real implementation
}> = ({ element }) => {
  const { blockType } = element

  switch (blockType) {
    case 'heading':
    //   return <HeadingBlock {...element} />
    case 'button':
    //   return <ButtonBlock {...element} />
    case 'layout':
    //   return <LayoutBlock {...element} />
    default:
      return null
  }
}
