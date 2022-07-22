import { Box, Group, Paper, Text } from '@mantine/core'
import React from 'react'
import { formatTime } from '../lib/formatter'

const ItemHeader = ({ comments }) => {
  return (
    <Paper mb='2rem'>
      <Text sx={{ fontSize: '18px' }}>{comments.title}</Text>
      <Group spacing='5px'>
        <Text sx={{ fontSize: '14px' }}>{comments.points} points by</Text>
        <Text sx={{ fontSize: '14px' }}>{comments.author}</Text>
        <Text sx={{ fontSize: '14px' }}>{comments.author}</Text>
      </Group>
      <Text sx={{ fontSize: '12px' }}>{formatTime(comments.created_at_i)}</Text>
    </Paper>
  )
}

export default ItemHeader
