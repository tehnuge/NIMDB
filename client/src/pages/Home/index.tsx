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
        <Link to={`/edit/new`}>
          Add Review
        </Link>
        {reviews.map(({ id, score, title, content }) => (
          <ReviewTile
            key={id}
            {...{ id, score, title, content }}
          />
        ))}
      </div>
    </Fragment>
)}

export default Home
