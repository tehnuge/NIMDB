import React from 'react'
import { Link } from 'react-router-dom'
import { User, Review } from '../../graphql';

export interface ReviewTileProps {
  review: Review
  user: User
}

const ReviewTile = (props: ReviewTileProps): JSX.Element => {
  const { id, title, content, user, media} = props.review;

  return (
    <div className='review-tile container border bg-light py-3 mb-3'>
      <div className='row'>
        <div className='col-1 img-fluid text-center'>
          <Link to={`medias/${media.id}`}>
            <img
              alt='Content poster or logo'
              className='img-fluid'
              src='https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg'
            />
          </Link>
          <span>{media.title}</span>
        </div>
        <div className='col-11'>
          <div className='header row d-flex align-items-center mb-3'>
            <div className='avatar col-1 img-fluid'>
              <img
                alt='User avatar'
                className='img-fluid'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png'
              />
            </div>
            <div className='title col-8'>
              <h2>{title}</h2>
            </div>
            <div className={props.user.id === user.id ? 'col-2 text-right' : 'd-none col-2 text-right'}>
              <Link to={`/medias/${media.id}/reviews/${id}/edit`}>
                EDIT
              </Link>
            </div>
          </div>
          <div className='content row pl-3'>
            <div className='col'>
              <p>{content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
