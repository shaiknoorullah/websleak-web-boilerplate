// src/blocks/Heading/config.ts
import { Block } from 'payload'
import { baseElementFields } from '../Element/config'
import deepMerge from '../../utilities/deepMerge'

export const HeadingBlock: Block = {
  slug: 'heading-custom',
  interfaceName: 'HeadingBlock',
  fields: deepMerge(baseElementFields, [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Configuration',
          fields: [
            {
              name: 'level',
              type: 'select',
              required: true,
              options: [
                { label: 'H1', value: 'h1' },
                { label: 'H2', value: 'h2' },
                { label: 'H3', value: 'h3' },
                { label: 'H4', value: 'h4' },
                { label: 'H5', value: 'h5' },
                { label: 'H6', value: 'h6' },
              ],
            },
          ],
        },
        {
          label: 'Content',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'seo',
              type: 'group',
              fields: [
                {
                  name: 'includeInTOC',
                  label: 'Include in Table of Contents',
                  type: 'checkbox',
                  defaultValue: true,
                },
                {
                  name: 'id',
                  label: 'Custom ID (for anchor links)',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    },
  ]),
}
