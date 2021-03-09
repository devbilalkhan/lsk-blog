import { IBlogs, IBlogsProps } from '@/src/types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio')

export async function scrapContent(): Promise<IBlogsProps> {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
  const text = await response.text()
  const $ = cheerio.load(text)
  const content = {
    title: $('.posts-container')
      .find('h3')
      .toArray()
      .map(x => $(x).text().trim()),
    author: $('.meta-author')
      .find('a')
      .toArray()
      .map(x => $(x).text().trim()),
    metaCategory: $('.meta-category')
      .find('a')
      .toArray()
      .map(x => $(x).text().trim()),
    metaCommentCount: $('.meta-comment-count')
      .find('a')
      .toArray()
      .map(x => $(x).text().trim()),
    metaContent: $('.content-inner')
      .find('p')
      .toArray()
      .map(x => $(x).text().trim()),
    creationDate: $('.post-meta')
      .find('div')
      .toArray()
      .map(x => $(x).text().trim())
      .filter(s => s),
    thumbnails: $('.main-content')
      .find('img')
      .toArray()
      .map(x => $(x).attr('data-nectar-img-src')),
    metaLinks: $('.post-header')
      .find('h3')
      .find('a')
      .toArray()
      .map(x => $(x).attr('href')),
  }

  // console.log(content.title);
  const keys = Object.keys(content)
  const allBlogs = [] as IBlogsProps

  for (let i = 0; i < content['title'].length; i++) {
    let reconcileBlogs = []
    for (let j = 0; j < keys.length; j++) {
      reconcileBlogs = [...reconcileBlogs, content[keys[j]][i]]
    }

    let collect: IBlogs
    for (let z = 0; z < keys.length; z++) {
      collect = { ...collect, [keys[z]]: reconcileBlogs[z] }
    }
    allBlogs[i] = collect
  }

  return allBlogs
}
