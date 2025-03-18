// src/blocks/Button/config.ts
import { Block, Field } from 'payload'
// import { baseElementFields } from '../Element/config'
// import deepMerge from '../../utilities/deepMerge'
// import { merge } from 'lodash'

// export const buttonBlockFields: Field[] = merge(baseElementFields, [
//   {
//     type: 'tabs',
//     tabs: [
//       {
//         label: 'Configuration',
//         fields: [
//           {
//             name: 'buttonType',
//             type: 'select',
//             required: true,
//             options: [
//               { label: 'Button', value: 'button' },
//               { label: 'Submit', value: 'submit' },
//               { label: 'Reset', value: 'reset' },
//             ],
//           },
//           {
//             name: 'size',
//             type: 'select',
//             options: [
//               { label: 'Small', value: 'sm' },
//               { label: 'Medium', value: 'md' },
//               { label: 'Large', value: 'lg' },
//             ],
//             defaultValue: 'md',
//           },
//           {
//             name: 'variant',
//             type: 'select',
//             options: [
//               { label: 'Primary', value: 'primary' },
//               { label: 'Secondary', value: 'secondary' },
//               { label: 'Outline', value: 'outline' },
//               { label: 'Ghost', value: 'ghost' },
//             ],
//             defaultValue: 'primary',
//           },
//         ],
//       },
//       {
//         label: 'Content',
//         fields: [
//           {
//             name: 'text',
//             type: 'text',
//             required: true,
//           },
//           {
//             name: 'link',
//             type: 'group',
//             fields: [
//               {
//                 name: 'url',
//                 type: 'text',
//               },
//               {
//                 name: 'newTab',
//                 type: 'checkbox',
//                 defaultValue: false,
//               },
//               {
//                 name: 'reference',
//                 type: 'relationship',
//                 relationTo: ['pages', 'posts'],
//               },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ])

// src/blocks/lexical/Button.ts

export const CustomButtonConfigFields: Field[] = [
  {
    label: 'Configuration',
    name: 'configuration',
    type: 'group',
    fields: [
      {
        name: 'buttonType',
        type: 'select',
        required: true,
        options: [
          { label: 'Button', value: 'button' },
          { label: 'Submit', value: 'submit' },
          { label: 'Reset', value: 'reset' },
        ],
      },
      {
        name: 'size',
        type: 'select',
        options: [
          { label: 'Small', value: 'sm' },
          { label: 'Medium', value: 'md' },
          { label: 'Large', value: 'lg' },
        ],
        defaultValue: 'md',
      },
      {
        name: 'variant',
        type: 'select',
        options: [
          { label: 'Primary', value: 'primary' },
          { label: 'Secondary', value: 'secondary' },
          { label: 'Outline', value: 'outline' },
          { label: 'Ghost', value: 'ghost' },
        ],
        defaultValue: 'primary',
      },
    ],
  },
]

export const CustomButtonBlock: Block = {
  slug: 'customButton',
  interfaceName: 'ICustomButtonBlock',
  labels: {
    singular: 'CustomButton',
    plural: 'CustomButtons',
  },
  fields: [
    // Core Button Configuration

    {
      name: 'buttonType',
      type: 'select',
      label: 'Button Type',
      required: true,
      defaultValue: 'button',
      options: [
        { label: 'Button', value: 'button' },
        { label: 'Submit', value: 'submit' },
        { label: 'Reset', value: 'reset' },
      ],
      admin: {
        description: 'Choose the HTML button type',
      },
    },
    {
      name: 'text',
      type: 'text',
      label: 'Button Text',
      required: true,
      admin: {
        description: 'The text to display on the button',
      },
    },

    // Link Configuration
    {
      type: 'row',
      fields: [
        {
          name: 'url',
          type: 'text',
          label: 'External URL',
          admin: {
            width: '50%',
            description: 'Add an external link (leave empty if using page reference)',
          },
        },
        {
          name: 'internalLink',
          type: 'relationship',
          relationTo: ['pages'],
          label: 'Internal Page Link',
          admin: {
            width: '50%',
            description: 'Link to an internal page (takes precedence over external URL)',
          },
        },
      ],
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Open in new tab',
      defaultValue: false,
    },

    // Appearance & Sizing
    {
      type: 'row',
      fields: [
        {
          name: 'size',
          type: 'select',
          options: [
            { label: 'Extra Small', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
          ],
          defaultValue: 'md',
          admin: {
            width: '33%',
          },
        },
        {
          name: 'variant',
          type: 'select',
          options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Success', value: 'success' },
            { label: 'Danger', value: 'danger' },
            { label: 'Warning', value: 'warning' },
            { label: 'Info', value: 'info' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'Outline Primary', value: 'outline-primary' },
            { label: 'Outline Secondary', value: 'outline-secondary' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Link Style', value: 'link' },
          ],
          defaultValue: 'primary',
          admin: {
            width: '33%',
          },
        },
        {
          name: 'width',
          type: 'select',
          options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Full Width', value: 'full' },
          ],
          defaultValue: 'auto',
          admin: {
            width: '33%',
          },
        },
      ],
    },

    // Icon Support
    {
      name: 'hasIcon',
      type: 'checkbox',
      label: 'Add Icon',
      defaultValue: false,
    },
    {
      name: 'iconConfig',
      type: 'group',
      admin: {
        condition: (data) => data.hasIcon,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'iconName',
              type: 'select',
              options: [
                { label: 'Arrow Right', value: 'arrow-right' },
                { label: 'Arrow Left', value: 'arrow-left' },
                { label: 'Download', value: 'download' },
                { label: 'Upload', value: 'upload' },
                { label: 'External Link', value: 'external-link' },
                { label: 'Plus', value: 'plus' },
                { label: 'Minus', value: 'minus' },
                { label: 'Check', value: 'check' },
                { label: 'Close', value: 'x' },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'iconPosition',
              type: 'select',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Right', value: 'right' },
              ],
              defaultValue: 'right',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'iconSize',
          type: 'select',
          options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
          ],
          defaultValue: 'md',
        },
      ],
    },

    // Advanced Styling
    {
      name: 'advancedStyling',
      type: 'group',
      label: 'Advanced Styling',
      admin: {
        description: 'Fine-tune the appearance of the button',
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'textColor',
              type: 'text',
              admin: {
                width: '50%',
                description: 'Override text color (e.g., #ffffff or rgb(255,255,255))',
              },
            },
            {
              name: 'backgroundColor',
              type: 'text',
              admin: {
                width: '50%',
                description: 'Override background color',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'borderRadius',
              type: 'select',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
                { label: 'Full (Pill)', value: 'full' },
              ],
              defaultValue: 'md',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'borderWidth',
              type: 'select',
              options: [
                { label: 'None', value: '0' },
                { label: 'Thin', value: '1' },
                { label: 'Medium', value: '2' },
                { label: 'Thick', value: '4' },
              ],
              defaultValue: '1',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'borderColor',
          type: 'text',
          admin: {
            description: 'Override border color',
          },
        },
        {
          type: 'row',
          fields: [
            {
              name: 'paddingHorizontal',
              type: 'select',
              options: [
                { label: 'None', value: '0' },
                { label: 'Extra Small', value: '1' },
                { label: 'Small', value: '2' },
                { label: 'Medium', value: '4' },
                { label: 'Large', value: '6' },
                { label: 'Extra Large', value: '8' },
              ],
              defaultValue: '4',
              admin: {
                width: '50%',
                description: 'Left/right padding',
              },
            },
            {
              name: 'paddingVertical',
              type: 'select',
              options: [
                { label: 'None', value: '0' },
                { label: 'Extra Small', value: '1' },
                { label: 'Small', value: '2' },
                { label: 'Medium', value: '3' },
                { label: 'Large', value: '4' },
                { label: 'Extra Large', value: '5' },
              ],
              defaultValue: '2',
              admin: {
                width: '50%',
                description: 'Top/bottom padding',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'shadow',
              type: 'select',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Small', value: 'sm' },
                { label: 'Medium', value: 'md' },
                { label: 'Large', value: 'lg' },
              ],
              defaultValue: 'none',
              admin: {
                width: '50%',
              },
            },
            {
              name: 'fontWeight',
              type: 'select',
              options: [
                { label: 'Normal', value: 'normal' },
                { label: 'Medium', value: 'medium' },
                { label: 'Semi-Bold', value: 'semibold' },
                { label: 'Bold', value: 'bold' },
              ],
              defaultValue: 'medium',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'customClasses',
          type: 'text',
          admin: {
            description: 'Add custom Tailwind classes (advanced)',
          },
        },
      ],
    },

    // Animation & Interactivity
    {
      name: 'interactive',
      type: 'group',
      label: 'Animation & Effects',
      fields: [
        {
          name: 'hoverEffect',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Darken', value: 'darken' },
            { label: 'Lighten', value: 'lighten' },
            { label: 'Grow', value: 'grow' },
            { label: 'Shrink', value: 'shrink' },
            { label: 'Raise (Shadow)', value: 'raise' },
          ],
          defaultValue: 'darken',
        },
        {
          name: 'clickEffect',
          type: 'select',
          options: [
            { label: 'None', value: 'none' },
            { label: 'Shrink', value: 'shrink' },
            { label: 'Sink', value: 'sink' },
          ],
          defaultValue: 'shrink',
        },
        {
          name: 'transitionSpeed',
          type: 'select',
          options: [
            { label: 'Fast', value: 'fast' },
            { label: 'Normal', value: 'normal' },
            { label: 'Slow', value: 'slow' },
          ],
          defaultValue: 'normal',
        },
      ],
    },

    // Accessibility
    {
      name: 'accessibility',
      type: 'group',
      label: 'Accessibility',
      fields: [
        {
          name: 'ariaLabel',
          type: 'text',
          label: 'ARIA Label',
          admin: {
            description: 'Screen reader text (defaults to button text if empty)',
          },
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title/Tooltip',
          admin: {
            description: 'Text shown on hover (optional)',
          },
        },
      ],
    },

    // Advanced JS Behavior (described in admin UI but implemented in the component)
    {
      name: 'advanced',
      type: 'group',
      label: 'Advanced Behavior',
      fields: [
        {
          name: 'behavior',
          type: 'select',
          options: [
            { label: 'Normal Link/Button', value: 'normal' },
            { label: 'Smooth Scroll to ID', value: 'smoothScroll' },
            { label: 'Open Modal', value: 'modal' },
          ],
          defaultValue: 'normal',
        },
        {
          name: 'targetId',
          type: 'text',
          admin: {
            condition: (data) => data.behavior === 'smoothScroll' || data.behavior === 'modal',
            description: 'ID of element to scroll to or modal to open',
          },
        },
      ],
    },
  ],
}
