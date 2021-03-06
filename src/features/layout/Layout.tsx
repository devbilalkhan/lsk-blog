import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import { HeadTag } from '@/src/ui/head'
import { Socials } from '@/src/ui/socials'
import { Box } from '@chakra-ui/react'
import React from 'react'

export const Layout: React.FC = ({ children }) => {
  //   console.log(blogs)

  return (
    <Box minHeight="100vh" position="relative">
      <HeadTag
        title="Laura Smith-Khan personal blog"
        description="Dr Laura Smith-Khan's is a leacturer and a reseacher. Her expertise are in linguistics and law. This is her personal blog website."
      >
        <Header />
        <Socials />
        {children}
        <Footer />
      </HeadTag>
    </Box>
  )
}
