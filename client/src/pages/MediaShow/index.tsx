import React from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

import { useMediaQuery } from '../../graphql'
import ReviewTile from '../../components/ReviewTile';

interface MediaShowParams {
  id: string
}

const MediaShow = (props: RouteComponentProps<MediaShowParams>): JSX.Element => {
  const {
    history,
    match: {
      params: { id },
    },
  } = props;
  const { data, error, loading } = useMediaQuery({ variables: { id }});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const { media } = data

  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to='/'>
              Back
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col-3'>
            <img
              alt='Content poster or logo'
              className='img-fluid'
              src='https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg'
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
                id={review.id}
                title={review.title}
                content={review.content}
                mediaTitle={media.title}
                mediaId={media.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaShow
