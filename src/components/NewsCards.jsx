import { Anchor, Box, Button, Loader, Paper, Text } from '@mantine/core'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR, { useSWRConfig } from 'swr'
import { formatTime } from '../lib/formatter'
import fetcher from '../services/fetcher'

const NewsCard = ({ url, type }) => {
  const [portion, setPortion] = useState(10)

  const { data } = useSWR([url, portion], fetcher, {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    refreshInterval: 60000, // 60000 = 1 min
  })

  const loadMore = async () => {
    window.scrollTo(0, 0)
    setPortion((state) => state + 10)
  }

  if (!data) {
    return (
      <Box sx={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader color='orange' />
      </Box>
    )
  }

  return (
    <>
      {data &&
        data.slice(portion - 10 != 0 ? portion - 10 : 0, portion).map((story, index) => (
          <Paper key={story.id} shadow='sm' p='sm' mb='0.5rem' sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box>
              {type !== 'jobs' && index + 1 + '. '}
              <Link href={story.url ? story.url : `/item/${story.id}`} passHref>
                <Anchor
                  target={story.url ? '_blank' : ''}
                  rel={story.url ? 'noopener noreferrer' : ''}
                  sx={{ textDecoration: 'none', color: 'black' }}>
                  {story.title}
                </Anchor>
              </Link>
            </Box>

            {type !== 'jobs' ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button mr='5px' p='0' variant='subtle' disabled>
                  +
                </Button>
                <Text sx={{ fontSize: '12px' }}>
                  {story.score} points{' '}
                  <Link href={`/user/${story.by}`} passHref>
                    <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>by {story.by} </Anchor>
                  </Link>
                  <Link href={`/item/${story.id}`} passHref>
                    <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>
                      {formatTime(story.time)}
                    </Anchor>
                  </Link>{' '}
                  |{' '}
                  <Link href='https://google.com' passHref>
                    <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>hide </Anchor>
                  </Link>
                  |{' '}
                  <Link href={`/item/${story.id}`} passHref>
                    <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>
                      {story.descendants} comments
                    </Anchor>
                  </Link>
                </Text>
              </Box>
            ) : (
              <Box>
                {' '}
                <Link href={`/item/${1}`} passHref>
                  <Anchor sx={{ textDecoration: 'none', color: 'black', fontSize: '12px' }}>
                    {formatTime(story.time)}
                  </Anchor>
                </Link>{' '}
              </Box>
            )}
          </Paper>
        ))}
      <Button mb='1rem' onClick={loadMore}>
        Load more
      </Button>
    </>
  )
}

export default NewsCard
