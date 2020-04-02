import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ReviewForm from '../../forms/Review'
import { useReviewQuery, Review } from '../../graphql'

interface ReviewParams {
  id: string
}

const ReviewEdit = (props: RouteComponentProps<ReviewParams>): JSX.Element => {
  const {
    history,
    match: {
      params: { id },
    },
  } = props;
  //const updateReviewMutation = useUpdateReviewMutation()
  const { data, error, loading } = useReviewQuery({ variables: { id }});

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const { review } = data;

  const onSubmit = async (formData: Review): Promise<void> => {
    const variables = {
      id: formData.id,
      title: formData.title,
      content: formData.content,
      score: formData.score,
      mediaId: formData.media.id,
    }
    //await updateReviewMutation({ variables })
    history.push('/')
  }

  const onCancel = () => {
    history.push('/')
  }

  return (
    <div className="container">
      <h1>Edit Review</h1>
      <ReviewForm
        review={review}
        onSubmit={onSubmit}
        onCancel={onCancel}
      />
    </div>
  )
}

export default ReviewEdit
