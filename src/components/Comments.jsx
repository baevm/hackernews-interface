import { Box, Button, Container, Group, Paper, Text } from '@mantine/core'

import React from 'react'
import { formatTime } from '../lib/formatter'

const Comments = ({ comments, answer }) => {
  

  const hasChildren = (member) => {
    return member.children && member.children.length > 0
  }
  return (
    <Container>
      {comments.children.map((comment) => (
        <div key={comment.id}>
          <MainComment comment={comment} answer={answer} />
          {hasChildren(comment) && <Comments comments={comment} answer={comment.author} />}
        </div>
      ))}
    </Container>
  )
}

const MainComment = ({ comment, answer }) => {
  return (
    <Paper shadow='sm' p='sm' mb='lg'>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Button mr='1px' p='0' variant='subtle'>
          +
        </Button>
        <Box>
          <Group spacing='xs'>
            <Text weight='bold'>{comment.author}</Text>
            <Text weight='bold' color='lightgray'>
              {answer ? 'to ' + answer : ''}
            </Text>
          </Group>
          {comment.created_at_i && (
            <Text color='gray' sx={{ fontSize: '12px' }}>
              {formatTime(comment.created_at_i)}
            </Text>
          )}
        </Box>
      </Box>
      <Box
        sx={{ fontSize: '12px', wordWrap: 'break-word' }}
        dangerouslySetInnerHTML={{ __html: comment.text ? comment.text : '[flagged]' }}
      />
    </Paper>
  )
}

export default Comments
