import React from 'react'
import { UserProps } from '../../interfaces/UserProps';

import ReviewForm from '../../forms/Review'
import { Review, useAddReviewMutation, useAddMediaMutation, ReviewsFeedDocument } from '../../graphql'

const omdbUrl = `http://omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_KEY}&t=`;
const fetchPoster = (title: string): Promise<string> => {
  let poster = fetch(omdbUrl + title)
    .then(response =>
      response.json())
    .then(responseData => {
      return responseData["Poster"]
    });
  return poster;
}

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
    let title = formData.media.title;
    let poster = fetchPoster(title);

    let variables = {
      id: formData.media.id,
      title,
      media_type: formData.media.media_type,
      url: ''
    };
    poster.then(posterUrl => {
      variables['url'] = posterUrl;
      return addMediaMutation({ variables });
    })
      .then(dbMediaId => {
        mediaId = dbMediaId.data.addMedia.id;
        const reviewVariables = {
          title: formData.title,
          content: formData.content,
          score: formData.score,
          mediaId: mediaId,
          userId: props.user.id
        }

        return addReviewMutation({ variables: reviewVariables });
      })
      .then(res => {
        history.push('/');
      });
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