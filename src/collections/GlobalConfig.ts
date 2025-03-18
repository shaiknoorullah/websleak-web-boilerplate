// src/collections/GlobalConfig.ts
import { CollectionConfig } from 'payload'

export const GlobalConfig: CollectionConfig = {
  slug: 'global-config',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Branding',
          fields: [
            {
              name: 'logo',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'favicon',
              type: 'upload',
              relationTo: 'media',
            },
          ],
        },
        {
          label: 'Typography',
          fields: [
            {
              name: 'fonts',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'source',
                  type: 'select',
                  options: [
                    { label: 'Google Fonts', value: 'google' },
                    { label: 'Custom', value: 'custom' },
                  ],
                },
                {
                  name: 'url',
                  type: 'text',
                  admin: {
                    condition: (data, siblingData) => siblingData?.source === 'custom',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Colors',
          fields: [
            {
              name: 'colorPalette',
              type: 'array',
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  admin: {
                    components: {
                      Field: '@/fields/ColorPicker/ColorPickerField',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
