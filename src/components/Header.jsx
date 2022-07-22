import { Box, Button, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const links = [
  {
    title: 'new',
    href: '/newest',
  },

  {
    title: 'best',
    href: '/best',
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
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {links.map((link) => (
          <Box key={link.title}>
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
    </Box>
  )
}

export default Header
