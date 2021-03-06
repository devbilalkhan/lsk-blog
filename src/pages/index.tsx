import { Layout } from '@/src/features/layout/Layout'
import { Box } from '@chakra-ui/react'

import { GetStaticProps, InferGetServerSidePropsType } from 'next'
import { BlogCard } from '../components/BlogCard'
import Hero from '../components/Hero'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cheerio = require('cheerio')

interface IBlog {
  title: string
  author: string
  metaCategory: string
  metaCommentCount: string
  metaContent: string
  creationDate: string
  thumbnails: string
  metaLinks: string
}
async function getDescription() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL)
  const text = await response.text()
  const $ = cheerio.load(text)
  const title = $('.posts-container')
    .find('h3')
    .toArray()
    .map(x => $(x).text().trim())
  const author = $('.meta-author')
    .find('a')
    .toArray()
    .map(x => $(x).text().trim())
  const metaCategory = $('.meta-category')
    .find('a')
    .toArray()
    .map(x => $(x).text().trim())
  const metaCommentCount = $('.meta-comment-count')
    .find('a')
    .toArray()
    .map(x => $(x).text().trim())
  const metaContent = $('.content-inner')
    .find('p')
    .toArray()
    .map(x => $(x).text().trim())
  const creationDate = $('.post-meta')
    .find('div')
    .toArray()
    .map(x => $(x).text().trim())
    .filter(s => s)
  const thumbnails = $('.main-content')
    .find('img')
    .toArray()
    .map(x => $(x).attr('data-nectar-img-src'))
  const metaLinks = $('.post-header')
    .find('h3')
    .find('a')
    .toArray()
    .map(x => $(x).attr('href'))
  const contentJSON = {
    title,
    author,
    metaCategory,
    metaCommentCount,
    metaContent,
    creationDate,
    thumbnails,
    metaLinks,
  }

  const keys = Object.keys(contentJSON)
  const values = Object.values(contentJSON)
  // console.log({[key[0]]: contentJSON[key[0]][0]});

  const blogsMeta = {}
  const k = {}
  for (let i = 0; i < values[0].length; i++) {
    values.forEach((items, j) => {
      k[keys[j]] = items[i]
    })
    blogsMeta[`blog${i}`] = k
  }
  // // console.log(values)
  return [blogsMeta]
}

export default function LandingPage({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>): React.ReactNode {
  return (
    <>
      <Layout>
        <Hero />
        <Box overflow="auto" as="pre">
          {JSON.stringify(data, null, 2)}
        </Box>
        <BlogCard data={data} />
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rawData = await getDescription()
  const data: IBlog = JSON.parse(JSON.stringify(rawData))
  return {
    props: {
      data,
    },
    revalidate: 3600,
  }
}
