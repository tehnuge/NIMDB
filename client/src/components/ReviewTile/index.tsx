import React from 'react'

export interface ReviewTileProps {
  title: string
  content: string
}

const ReviewTile = (props: ReviewTileProps): JSX.Element => {
  return (
    <div className='review-tile container'>
      <div className='row'>
        <div className='col-4'>
          <img src='https://upload.wikimedia.org/wikipedia/en/8/83/Dark_knight_rises_poster.jpg' />
        </div>
        <div className='col-8'>
          <div className='header row'>
            <div className='avatar col-2'>
              <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1200px-Missing_avatar.svg.png' />
            </div>
            <div className='title col-10'>
              <h2>{props.title}</h2>
            </div>
          </div>
          <div className='content row'>
            <div className='col'>
              <p>{props.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTile
