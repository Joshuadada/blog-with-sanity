import { type SchemaTypeDefinition } from 'sanity'

import { blogType } from './blogType'
import { tagType } from './tagTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogType, tagType ],
}
