import { defineTransformer } from '@nuxt/content/transformers'
import type { ParsedContent } from '@nuxt/content/types'
import { minutesToRead } from '~/utils/timeToRead'

export default defineTransformer({
  name: 'time-to-read-transformer',
  extensions: ['.md'],
  transform(content: ParsedContent) {
    content["timeToRead"] = minutesToRead(content.body)
    return content
  }
})
