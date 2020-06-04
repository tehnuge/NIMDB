import React from 'react';
import { Link } from 'react-router-dom';

import { useMediaQuery } from '../../graphql';
import ReviewTile from '../../components/ReviewTile';
import { UserProps } from '../../interfaces/UserProps';

interface MediaShowParams {
  id: string
}

const MediaShow = (props: UserProps<MediaShowParams>): JSX.Element => {
  const {
    match: {
      params: { id },
    },
  } = props.routeProps;
  const { data, error, loading } = useMediaQuery({ variables: { id } });

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const { media } = data
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to='/' className='back-btn'>
              Back
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img
              alt='Content poster or logo'
              className='img-fluid'
              src={media.url}
            />
          </div>
          <div className='col-9'>
            <h1>
              {media.title}
            </h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h2>Reviews</h2>
            {media.reviews.map((review) => (
              <ReviewTile
                key={review.id}
                review={review}
                user={props.user}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaShow
