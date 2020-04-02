import React from 'react'

import { Link } from 'react-router-dom'

export interface ReviewTileProps {
  id: string
  title: string
  content: string
}

const ReviewTile = (props: ReviewTileProps): JSX.Element => {
  const { id, title, content } = props;

  return (
    <div className='review-tile container'>
      <div className='row'>
        <div className='col-4 img-fluid'>
          <img
            className='img-fluid'
            src='https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg'
          />
        </div>
        <div className='col-8'>
          <div className='header row'>
            <div className='avatar col-2 img-fluid'>
              <img
                className='img-fluid'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png'
              />
            </div>
            <div className='title col-9'>
              <h2>{title}</h2>
            </div>
            <div className='title col-1'>
              <Link to={`/edit/${id}`}>
                EDIT
              </Link>
            </div>
          </div>
          <div className='content row'>
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
