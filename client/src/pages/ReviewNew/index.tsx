import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ReviewForm from '../../forms/Review'
import { Review, useAddReviewMutation } from '../../graphql'

interface ReviewParams {
  id: string
}

const ReviewEdit = (props: RouteComponentProps<ReviewParams>): JSX.Element => {
  const {
    history
  } = props;
  const [addReviewMutation] = useAddReviewMutation();


  const newReview: Review = {id:null, title:"", score: 5, content: ""};

  const onSubmit = async (formData: Review): Promise<void> => {
    const variables = {
      title: formData.title,
      content: formData.content,
      score: formData.score
    }

    await addReviewMutation({ variables })
    history.push('/')
  }

  const onCancel = () => {
    history.push('/')
  }

  return (
    <div className="container">
      <h1>New Review</h1>
      <ReviewForm
        review={newReview}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </div>
  )
}

export default ReviewEdit
