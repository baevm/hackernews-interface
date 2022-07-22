import { Box, Group, Text } from '@mantine/core'
import React from 'react'
import { formatTime } from '../../lib/formatter'
import { getUser } from '../../services/getUser'

const User = ({ user }) => {
 
  return (
    <>
      {user && (
        <Box>
          <Group spacing='5px' direction='row'>
            <Text weight='bold'>User:</Text> <Text>{user.id}</Text>
          </Group>
          <Group spacing='5px' direction='row' sx={{ wordBreak: 'break-all' }}>
            <Text>
              <span style={{ fontWeight: 'bold' }}>About:</span> {user.about ? user.about : '-'}
            </Text>
            <Text></Text>
          </Group>

          <Group spacing='5px' direction='row'>
            <Text weight='bold'>Karma:</Text> <Text>{user.karma}</Text>
          </Group>
          <Group spacing='5px' direction='row'>
            <Text weight='bold'>Created:</Text> <Text>{formatTime(user.created)}</Text>
          </Group>
          <Group spacing='5px' direction='row'>
            <Text weight='bold'>Submitted:</Text> <Text>{user.submitted.length}</Text>
          </Group>
        </Box>
      )}
    </>
  )
}

export default User

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id

  const user = await getUser(id)
  return {
    props: {
      user,
    },
  }
}
