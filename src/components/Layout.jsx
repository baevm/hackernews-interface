import React from 'react'
import { Container, Box } from '@mantine/core'
import Header from './Header'

const Layout = ({ children }) => {
  return (
    <Container size='xl' px='0' sx={{ backgroundColor: '#F6F6EF' }}>
      <Header />
      <Box px='sm' sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
      </Box>
    </Container>
  )
}

export default Layout
