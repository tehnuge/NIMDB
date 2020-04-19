import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import ReviewTile from '../../components/ReviewTile';
import { useReviewsFeedQuery } from '../../graphql';
import { UserProps } from '../../interfaces/UserProps';

const Home = (props: UserProps<any>): JSX.Element => {
  const { data, error, loading } = useReviewsFeedQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.reviews) return <p>No data</p>

  const { reviews } = data;

  return (
    <Fragment>
      <div className="container">
        <h1>Latest NIMDB Reviews</h1>
        <ul>
          <li>
            <a href={`${process.env.REACT_APP_SERVER_URL}/auth/google/`}>
              Sign In with Google
            </a>
          </li>
          <li className={props.user.googleId ? "": "d-none"}>
            <Link to={`reviews/new`} >
              Add Review
            </Link>
          </li>
        </ul>
        {reviews.map((review) => (
          <ReviewTile
            review={review}
            user={props.user}
          />
        ))}
      </div>
    </Fragment>
)}

export default Home
