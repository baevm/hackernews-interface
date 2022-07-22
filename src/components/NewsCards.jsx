import { Anchor, Box, Button, Paper, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'
import { formatTime } from '../lib/formatter'
import useSWR, { SWRConfig } from 'swr'
import fetcher from '../services/fetcher'

const NewsCard = () => {
  const { data } = useSWR('/getTopStories', fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    refreshInterval: 999999, // 60000 = 1 min
  })
  
  return (
    <>
      {data.map((story, index) => (
        <Paper key={story.id} shadow='sm' p='sm' mb='0.5rem' sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box>
            {index + 1}.{' '}
            <Link href={story.url ? story.url : `/item/${story.id}`} passHref>
              <Anchor
                target={story.url ? '_blank' : ''}
                rel={story.url ? 'noopener noreferrer' : ''}
                sx={{ textDecoration: 'none', color: 'black' }}>
                {story.title}
              </Anchor>
            </Link>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button mr='5px' p='0' variant='subtle'>
              +
            </Button>
            <Text sx={{ fontSize: '12px' }}>
              {story.score} points{' '}
              <Link href={`/user/${1}`} passHref>
                <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>by {story.by} </Anchor>
              </Link>
              <Link href={`/item/${1}`} passHref>
                <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>
                  {formatTime(story.time)}
                </Anchor>
              </Link>{' '}
              |{' '}
              <Link href='https://google.com' passHref>
                <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>hide </Anchor>
              </Link>{' '}
              |{' '}
              <Link href={`/item/${story.id}`} passHref>
                <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>
                  {story.descendants} comments
                </Anchor>
              </Link>
            </Text>
          </Box>
        </Paper>
      ))}
    </>
  )
}

export default NewsCard
