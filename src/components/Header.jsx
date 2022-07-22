import React from 'react'
import { Container, Box, Text, Button } from '@mantine/core'
import Link from 'next/link'

const links = [
  {
    title: 'new',
    href: '/newest',
  },
  {
    title: 'past',
    href: '/past',
  },
  {
    title: 'comments',
    href: '/comments',
  },
  {
    title: 'ask',
    href: '/ask',
  },
  {
    title: 'show',
    href: '/show',
  },
  {
    title: 'jobs',
    href: '/jobs',
  },
]

const Header = () => {
  return (
    <Box px='xl' mb='1rem' sx={{ backgroundColor: 'orange', width: '100%', display: 'flex', alignItems: 'center' }}>
      <Link href='/'>
        <Text weight='bold' sx={{ cursor: 'pointer' }}>
          Hacker news
        </Text>
      </Link>
      {links.map((link) => (
        <Box key={link.title} sx={{ marginLeft: '1rem' }}>
          <Link href={link.href} passHref>
            <Button
              component='a'
              variant='subtle'
              sx={{
                color: 'black',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}>
              {link.title}
            </Button>
          </Link>
        </Box>
      ))}
    </Box>
  )
}

export default Header
