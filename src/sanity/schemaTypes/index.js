import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import introduction from "@/sanity/schemaTypes/introduction";

export const schema = {
  types: [blockContentType, categoryType, postType, authorType,introduction],
}
