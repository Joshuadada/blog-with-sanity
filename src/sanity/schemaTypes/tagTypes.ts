import { TagIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export const tagType = defineType({
  name: 'tag',
  title: 'Tags',
  type: 'document',
  icon: TagIcon,
  fields: [
    {
        type: 'string',
        name: 'tagName',
        title: 'Tag Name'
    }
  ]
})