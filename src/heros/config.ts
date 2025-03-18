import type { Field } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  LinkFeature,
  BlocksFeature,
  UnorderedListFeature,
  AlignFeature,
  IndentFeature,
  ItalicFeature,
  UploadFeature,
  TreeViewFeature,
  ChecklistFeature,
  ParagraphFeature,
  SubscriptFeature,
  UnderlineFeature,
  StrikethroughFeature,
  BlockquoteFeature,
  InlineCodeFeature,
  OrderedListFeature,
  SuperscriptFeature,
  RelationshipFeature,
  TestRecorderFeature,
  HorizontalRuleFeature,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'
import { CustomButtonBlock } from '@/blocks/Button/config'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'lowImpact',
      label: 'Type',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
      required: true,
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
            BoldFeature(),
            LinkFeature(),
            BlocksFeature({
              blocks: [CustomButtonBlock],
            }),
            UnorderedListFeature(),
            AlignFeature(),
            IndentFeature(),
            ItalicFeature(),
            UploadFeature(),
            TreeViewFeature(),
            ChecklistFeature(),
            ParagraphFeature(),
            SubscriptFeature(),
            UnderlineFeature(),
            StrikethroughFeature(),
            BlockquoteFeature(),
            InlineCodeFeature(),
            OrderedListFeature(),
            SuperscriptFeature(),
            RelationshipFeature(),
            TestRecorderFeature(),
            HorizontalRuleFeature(),
          ]
        },
      }),
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
