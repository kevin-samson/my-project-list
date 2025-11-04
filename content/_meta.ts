import type { MetaRecord } from 'nextra'
 
const meta: MetaRecord = {
  "index": {
    "type": "page",
    "display": "hidden",
    "theme": {
      typesetting: "article",
      layout: "full",
      toc: false,
      timestamp: false,
      sidebar: false,
      pagination: false
    }

  },
  "about": {
    "title": "About",
    "type": "page",
    "theme": {
      "sidebar": false,
      "toc": false
    }
  },
  "projects": {
    "title": "Projects",
    "type": "page"
  }
}
 
export default meta
