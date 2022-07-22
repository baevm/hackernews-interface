import React from 'react'
import Comments from '../../components/Comments'
import { getStoryComments } from '../../services/getStoryComments'
import Head from 'next/head'
import ItemHeader from '../../components/ItemHeader'

const Item = ({ comments }) => {

  return (
    <>
      <Head>
        <title>{comments.title}</title>
      </Head>
      <ItemHeader comments={comments} />
      <Comments comments={comments} />
    </>
  )
}

export default Item

export const getServerSideProps = async (ctx) => {
  const id = ctx.query.id
  const comments = await getStoryComments(id)
  return {
    props: {
      comments,
    },
  }
}
