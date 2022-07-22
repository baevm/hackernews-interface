import React from 'react'
import NewsCard from '../components/NewsCard'

const newest = ({stories}) => {
  return (
    <>
    {stories.map((story, index) => (
      <NewsCard key={story.id} story={story} index={index + 1}/>
    ))}
  </>
  )
}

export default newest

export const getServerSideProps = async () => {
  const data = await fetch(
    'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty&limitToFirst=10&orderBy="$key"'
  )
  const res = await data.json()
  const stories = await Promise.all(
    res.map((item) =>
      fetch(`https://hacker-news.firebaseio.com/v0/item/${item}.json`).then(async (res) => await res.json())
    )
  )

  return {
    props: { stories},
  }
}