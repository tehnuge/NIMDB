import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import ReviewTile from '../../components/ReviewTile';
import { useReviewsFeedQuery } from '../../graphql';
import { UserProps } from '../../interfaces/UserProps';
import {REACT_APP_SERVER_URL} from '../../App';

const Home = (props: UserProps<any>): JSX.Element => {
  const { data, error, loading } = useReviewsFeedQuery()
  console.log("env:",REACT_APP_SERVER_URL)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!data || !data.reviews) return <p>No data</p>

  const { reviews } = data;

  return (
    <Fragment>
      <div className="container">
        <h1>Latest NIMDB Reviews</h1>
        <ul>
          {!props.user.id && <li>
            <a href={REACT_APP_SERVER_URL + `/auth/google/`}>
              Sign in with Google
            </a>
          </li>}
          {props.user.id && <li>
            <Link to={`reviews/new`} >
              Add Review
            </Link>
          </li>}
        </ul>
        {reviews.map((review) => (
          <ReviewTile
            key={review.id}
            review={review}
            user={props.user}
          />
        ))}
      </div>
    </Fragment>
)}

export default Home
