// src/blocks/Layout/config.ts
import { Block } from 'payload'
import { baseElementFields } from '../Element/config'
import deepMerge from '../../utilities/deepMerge'

export const LayoutBlock: Block = {
  slug: 'layout-custom',
  interfaceName: 'LayoutBlock',
  fields: deepMerge(baseElementFields, [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Configuration',
          fields: [
            {
              name: 'layoutType',
              type: 'select',
              required: true,
              options: [
                { label: 'Container', value: 'container' },
                { label: 'Section', value: 'section' },
                { label: 'Div', value: 'div' },
                { label: 'Article', value: 'article' },
                { label: 'Aside', value: 'aside' },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'elements',
              type: 'blocks',
              blocks: [
                {
                  slug: 'element',
                  interfaceName: 'ElementBlock',
                },
                {
                  slug: 'heading',
                  interfaceName: 'HeadingBlock',
                },
                {
                  slug: 'button',
                  interfaceName: 'ButtonBlock',
                },
                // Add other element types here
              ],
            },
          ],
        },
      ],
    },
  ]),
}
