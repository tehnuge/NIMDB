import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import ReviewTile from '../../components/ReviewTile';
import { useReviewsFeedQuery } from '../../graphql';

const Home = (): JSX.Element => {
  const { data, error, loading } = useReviewsFeedQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.reviews) return <p>No data</p>

  const { reviews } = data

  return (
    <Fragment>
      <div className="container">
        <h1>Latest NIMDB Reviews</h1>
        <Link to={`reviews/new`}>
          Add Review
        </Link>
        {reviews.map((review) => (
          <ReviewTile
            key={review.id}
            id={review.id}
            title={review.title}
            content={review.content}
            mediaTitle={review.media.title}
          />
        ))}
      </div>
    </Fragment>
)}

export default Home
