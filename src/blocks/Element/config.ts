// src/blocks/Element/config.ts

import type { Block, Field } from 'payload'

export const baseElementFields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Configuration',
        fields: [
          {
            name: 'componentType',
            type: 'select',
            required: true,
            options: [
              { label: 'Heading', value: 'heading' },
              { label: 'Text', value: 'text' },
              { label: 'Button', value: 'button' },
              { label: 'Image', value: 'image' },
              { label: 'Link', value: 'link' },
              // Add other component types as needed
            ],
          },
          // This will be extended by specific element types
        ],
      },
      {
        label: 'Design',
        fields: [
          {
            name: 'layout',
            type: 'group',
            fields: [
              {
                name: 'display',
                type: 'select',
                defaultValue: 'block',
                options: [
                  { label: 'Block', value: 'block' },
                  { label: 'Inline', value: 'inline' },
                  { label: 'Flex', value: 'flex' },
                  { label: 'Grid', value: 'grid' },
                  { label: 'None', value: 'none' },
                ],
              },
              {
                name: 'flexDirection',
                type: 'select',
                defaultValue: 'row',
                admin: {
                  condition: (data, siblingData) => siblingData?.display === 'flex',
                },
                options: [
                  { label: 'Row', value: 'row' },
                  { label: 'Column', value: 'column' },
                ],
              },
              {
                name: 'justifyContent',
                type: 'select',
                defaultValue: 'flex-start',
                admin: {
                  condition: (data, siblingData) => siblingData?.display === 'flex',
                },
                options: [
                  { label: 'Start', value: 'flex-start' },
                  { label: 'Center', value: 'center' },
                  { label: 'End', value: 'flex-end' },
                  { label: 'Space Between', value: 'space-between' },
                  { label: 'Space Around', value: 'space-around' },
                ],
              },
              {
                name: 'alignItems',
                type: 'select',
                defaultValue: 'stretch',
                admin: {
                  condition: (data, siblingData) => siblingData?.display === 'flex',
                },
                options: [
                  { label: 'Start', value: 'flex-start' },
                  { label: 'Center', value: 'center' },
                  { label: 'End', value: 'flex-end' },
                  { label: 'Stretch', value: 'stretch' },
                ],
              },
              {
                name: 'gap',
                type: 'number',
                admin: {
                  condition: (data, siblingData) => ['flex', 'grid'].includes(siblingData?.display),
                },
                defaultValue: 0,
              },
              // Grid specific options would go here
            ],
          },
          {
            name: 'style',
            type: 'group',
            fields: [
              {
                name: 'backgroundColor',
                type: 'text',
                admin: {
                  components: {
                    Field: '@/fields/ColorPicker/ColorPickerField',
                  },
                },
                defaultValue: 'transparent',
              },
              {
                name: 'textColor',
                type: 'text',
                admin: {
                  components: {
                    Field: '@/fields/ColorPicker/ColorPickerField',
                  },
                },
                defaultValue: 'inherit',
              },
              {
                name: 'typography',
                type: 'group',
                admin: {
                  condition: (data) =>
                    ['heading', 'text', 'button', 'link'].includes(
                      data?.configuration?.componentType,
                    ),
                },
                fields: [
                  {
                    name: 'fontFamily',
                    type: 'select',
                    options: [
                      { label: 'Default', value: 'inherit' },
                      { label: 'Sans Serif', value: 'sans-serif' },
                      { label: 'Serif', value: 'serif' },
                      { label: 'Mono', value: 'monospace' },
                      // Dynamic options could be loaded from global settings
                    ],
                  },
                  {
                    name: 'fontSize',
                    type: 'select',
                    options: [
                      { label: 'Default', value: 'inherit' },
                      { label: 'Extra Small', value: 'xs' },
                      { label: 'Small', value: 'sm' },
                      { label: 'Medium', value: 'md' },
                      { label: 'Large', value: 'lg' },
                      { label: 'Extra Large', value: 'xl' },
                      { label: '2XL', value: '2xl' },
                      { label: '3XL', value: '3xl' },
                    ],
                  },
                  {
                    name: 'fontWeight',
                    type: 'select',
                    options: [
                      { label: 'Default', value: 'inherit' },
                      { label: 'Light', value: 'light' },
                      { label: 'Normal', value: 'normal' },
                      { label: 'Medium', value: 'medium' },
                      { label: 'Bold', value: 'bold' },
                    ],
                  },
                  {
                    name: 'letterSpacing',
                    type: 'select',
                    options: [
                      { label: 'Default', value: 'inherit' },
                      { label: 'Tight', value: 'tight' },
                      { label: 'Normal', value: 'normal' },
                      { label: 'Wide', value: 'wide' },
                    ],
                  },
                  {
                    name: 'lineHeight',
                    type: 'select',
                    options: [
                      { label: 'Default', value: 'inherit' },
                      { label: 'Tight', value: 'tight' },
                      { label: 'Normal', value: 'normal' },
                      { label: 'Relaxed', value: 'relaxed' },
                      { label: 'Loose', value: 'loose' },
                    ],
                  },
                ],
              },
              // Border, radius, shadow, etc. could go here
            ],
          },
          {
            name: 'spacing',
            type: 'group',
            fields: [
              {
                name: 'padding',
                type: 'group',
                fields: [
                  {
                    name: 'top',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'right',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'bottom',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'left',
                    type: 'number',
                    defaultValue: 0,
                  },
                ],
              },
              {
                name: 'margin',
                type: 'group',
                fields: [
                  {
                    name: 'top',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'right',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'bottom',
                    type: 'number',
                    defaultValue: 0,
                  },
                  {
                    name: 'left',
                    type: 'number',
                    defaultValue: 0,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: 'Content',
        fields: [
          // This will be extended by specific element types
        ],
      },
    ],
  },
]

export const ElementBlock: Block = {
  slug: 'element-custom',
  interfaceName: 'ElementBlock',
  fields: baseElementFields,
}
