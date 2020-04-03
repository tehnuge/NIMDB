import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import ReviewForm from '../../forms/Review'
import { Review, useAddReviewMutation, useAddMediaMutation } from '../../graphql'

interface ReviewParams {
  id: string
}

const ReviewEdit = (props: RouteComponentProps<ReviewParams>): JSX.Element => {
  const {
    history
  } = props;
  const [addReviewMutation] = useAddReviewMutation();
  const [addMediaMutation] = useAddMediaMutation();

  const newReview: Review = {id:null, title:"", score: 5, content: ""};

  const onSubmit = async (formData: Review): Promise<void> => {
    let mediaId;
    if (formData.media){
      const variables = formData.media;
      const newMedia = await addMediaMutation({ variables });
      console.log(newMedia.data.addMedia.id)
      mediaId = newMedia.data.addMedia.id
    } else {
      mediaId = formData.media.id
    }

    // index.js:1 Warning: `value` prop on `input` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.

    console.log(formData)

    const variables = {
      title: formData.title,
      content: formData.content,
      score: formData.score,
      mediaId: mediaId
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
