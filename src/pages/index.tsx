import React from 'react'
import Hero from '../components/Hero'
import { Layout } from '@/src/features/layout/Layout'
import { Box, Flex } from '@chakra-ui/react'
import { IBlogsProps } from '@/src/types'
import { BlogCard } from '../components/BlogCard'
import { GetStaticProps } from 'next'
import { scrapContent } from 'utils/scrap'

const LandingPage: React.FC<IBlogsProps> = ({ blogs }) => {
  return (
    <>
      <Layout>
        <Flex direction="column" minHeight="100vh">
          <Box style={{ flexGrow: 1 }}>
            <Hero />
            <BlogCard blogs={blogs} />
          </Box>
        </Flex>
      </Layout>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const rawData = await scrapContent()
  const blogs: IBlogsProps = JSON.parse(JSON.stringify(rawData))
  return {
    props: {
      blogs,
    },
    revalidate: 3600,
  }
}

export default LandingPage
