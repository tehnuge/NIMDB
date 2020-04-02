import React, { Fragment } from 'react'

import ReviewTile from '../../components/ReviewTile'
import { useReviewsFeedQuery } from '../../graphql'
import { ReviewTileProps } from '../../components/ReviewTile'

const Home = (): JSX.Element => {
  const { data, error, loading } = useReviewsFeedQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.reviews) return <p>No data</p>

  const { reviews } = data

  return (
    <Fragment>
      <div className="container">
        <h1>Reviews</h1>
        {reviews.map(({ title, content }) => (
          <ReviewTile
            {...{ title, content }}
          />
        ))}
      </div>
    </Fragment>
)}

export default Home
