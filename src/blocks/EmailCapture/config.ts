import type { Block } from 'payload'

export const Code: Block = {
  slug: 'email-capture',
  interfaceName: 'EmailCapture',
  fields: [
    // Option 3: Use tabs to organize fields into separate sections
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          description: 'Main content settings',
          fields: [
            {
              name: 'subtitle',
              type: 'text',
              label: 'Subtitle Text',
              admin: {
                description: 'Text to add above the email capture field',
              },
              required: true,
            },
            {
              name: 'field',
              type: 'relationship',
              relationTo: 'forms',
              label: 'Email Capture Code',
              required: true,
            },
            {
              name: 'cta',
              type: 'blocks',
              blocks: [
                {
                  slug: 'cta',
                  fields: [
                    {
                      label: 'Call to action',
                      name: 'cta',
                      relationTo: 'categories',
                      type: 'relationship',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Configuration',
          description: 'Configure Email Capture Form',
          fields: [
            {
              name: 'formType',
              label: 'Form Type',
              type: 'select',
              options: [
                {
                  label: 'Composite',
                  value: 'composite',
                },
                {
                  label: 'Separate',
                  value: 'separate',
                },
              ],
              admin: {
                description: 'Configure the composition of the Email Capture Form',
              },
            },
            {
              name: 'layout',
              label: 'Layout',
              type: 'select',
              options: [
                {
                  label: 'Horizontal',
                  value: 'row',
                },
                {
                  label: 'Vertical',
                  value: 'col',
                },
              ],
              admin: {
                description: 'Configure the layout of the Email Capture Form',
              },
            },
            {
              type: 'collapsible',
              label: 'Alignment',
              admin: {
                description: 'Configure the Alignment of the Email Capture Form',
              },
              fields: [
                {
                  name: 'horizontalAlignment',
                  type: 'group',
                  label: 'Alignment',
                  fields: [
                    {
                      name: 'horizontalAlignment',
                      label: 'Horizontal Alignment',
                      type: 'select',
                      admin: {
                        description: 'Configure Horizontal Alignment Of the Field',
                      },
                      options: [
                        {
                          label: 'Right',
                          value: 'justify-end',
                        },
                        {
                          label: 'Center',
                          value: 'justify-center',
                        },
                        {
                          label: 'Spaced Out',
                          value: 'justify-between',
                        },
                        {
                          label: 'Left',
                          value: 'justify-start',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: 'Typography',
          description: 'Text styling options',
          fields: [
            {
              name: 'color',
              type: 'text',
              label: 'Text Color',
              defaultValue: '#000000',
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'fontSize',
                  type: 'select',
                  label: 'Font Size',
                  defaultValue: 'medium',
                  options: [
                    { label: 'Small', value: 'small' },
                    { label: 'Medium', value: 'medium' },
                    { label: 'Large', value: 'large' },
                  ],
                  admin: { width: '50%' },
                },
                {
                  name: 'fontWeight',
                  type: 'select',
                  label: 'Font Weight',
                  defaultValue: 'normal',
                  options: [
                    { label: 'Normal', value: 'normal' },
                    { label: 'Bold', value: 'bold' },
                  ],
                  admin: { width: '50%' },
                },
              ],
            },
          ],
        },
        {
          label: 'Spacing',
          description: 'Layout and spacing settings',
          fields: [
            {
              name: 'paddingLabel',
              type: 'text',
              label: 'Padding (px)',
              admin: {
                readOnly: true,
                style: {
                  fontWeight: 'bold',
                },
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'paddingTop',
                  type: 'number',
                  label: 'Top',
                  defaultValue: 0,
                  admin: { width: '25%' },
                },
                {
                  name: 'paddingRight',
                  type: 'number',
                  label: 'Right',
                  defaultValue: 0,
                  admin: { width: '25%' },
                },
                {
                  name: 'paddingBottom',
                  type: 'number',
                  label: 'Bottom',
                  defaultValue: 0,
                  admin: { width: '25%' },
                },
                {
                  name: 'paddingLeft',
                  type: 'number',
                  label: 'Left',
                  defaultValue: 0,
                  admin: { width: '25%' },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
