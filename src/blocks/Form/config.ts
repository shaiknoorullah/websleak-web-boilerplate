import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'
import { FieldsConfig } from '@payloadcms/plugin-form-builder/types'

export const FormBlock: Block = {
  slug: 'formBlock',
  interfaceName: 'FormBlock',
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      type: 'checkbox',
      label: 'Enable Intro Content',
    },
    {
      name: 'introContent',
      type: 'richText',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      label: 'Intro Content',
    },
  ],
  graphQL: {
    singularName: 'FormBlock',
  },
  labels: {
    plural: 'Form Blocks',
    singular: 'Form Block',
  },
}

export const DateBlock: Block = {
  slug: 'date',
  interfaceName: 'DateField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name (lowercase, no special characters)',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'width',
          type: 'number',
          label: 'Field Width (percentage)',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'defaultValue',
          type: 'date',
          label: 'Default Date',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'required',
      type: 'checkbox',
      label: 'Required',
    },
  ],
  labels: {
    singular: 'Date Field',
    plural: 'Date Fields',
  },
}

export const FileBlock: Block = {
  slug: 'file',
  interfaceName: 'FileField',
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name (lowercase, no special characters)',
          required: true,
          admin: {
            width: '50%',
          },
        },
        {
          name: 'label',
          type: 'text',
          label: 'Label',
          admin: {
            width: '50%',
          },
        },
      ],
    },
    {
      type: 'row',
      fields: [
        {
          name: 'width',
          type: 'number',
          label: 'Field Width (percentage)',
          admin: {
            width: '50%',
          },
        },
        {
          name: 'accept',
          type: 'text',
          label: 'Accepted File Types',
          admin: {
            description: 'Comma-separated mime types or extensions (e.g., "image/*,.pdf")',
            width: '50%',
          },
        },
      ],
    },
    {
      name: 'required',
      type: 'checkbox',
      label: 'Required',
    },
  ],
  labels: {
    singular: 'File Field',
    plural: 'File Fields',
  },
}

// Create a custom field config to register the blocks
export const customFieldsConfig: FieldsConfig = {
  date: {
    // Add any field-specific configuration here
    // This can be a simple `true` or an object with admin configuration
    ...DateBlock,
    admin: {
      description: 'A date selection field',
    },
  },
  file: {
    // Add any field-specific configuration here
    ...FileBlock,
    admin: {
      description: 'A file upload field',
      // components: {
      //   Field: {
      //     exportName: 'File',
      //     path: '@/blocks/Form/File',
      //   }, // If you have a custom admin component
      // },
    },
  },
}
