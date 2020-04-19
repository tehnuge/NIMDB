import React from 'react'
import { UserProps } from '../../interfaces/UserProps';

import ReviewForm from '../../forms/Review'
import { Review, useAddReviewMutation, useAddMediaMutation, ReviewsFeedDocument } from '../../graphql'

const ReviewNew = (props: UserProps<any>): JSX.Element => {
  const {
    history
  } = props.routeProps;

  const [addReviewMutation] = useAddReviewMutation(
    {
      update(cache, { data: { addReview } }) {
        const { reviews } = cache.readQuery({ query: ReviewsFeedDocument });
        cache.writeQuery({
          query: ReviewsFeedDocument,
          data: { reviews: reviews.concat([addReview]) }
        });
      }
    });
  const [addMediaMutation] = useAddMediaMutation();

  const newReview: Review = { id: null, title: "", score: 5, content: "", user: props.user };

  const onSubmit = async (formData: Review): Promise<void> => {
    let mediaId;
    if (formData.media) {

      const variables = {
        id: formData.media.id,
        title: formData.media.title,
        media_type: formData.media.media_type,
        url: formData.media.url
      };
      const newMedia = await addMediaMutation({ variables });
      mediaId = newMedia.data.addMedia.id
    } else {
      mediaId = formData.media.id
    }

    const variables = {
      title: formData.title,
      content: formData.content,
      score: formData.score,
      mediaId: mediaId,
      userId: props.user.id
    }

    await addReviewMutation({ variables });
    history.push('/');
  }

  const onCancel = () => {
    history.push('/');
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

export default ReviewNew;
