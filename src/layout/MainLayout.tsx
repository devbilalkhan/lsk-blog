import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Box } from '@chakra-ui/react'
import React from 'react'

interface LayoutProps {}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box minHeight="100vh" position="relative">
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default MainLayout
