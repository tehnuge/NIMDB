import { Formik, Form } from 'formik';
import React from 'react';
import { Input, Select } from '../../components';
import { Option } from '../../components/Select';
import { Review } from '../../graphql';

interface ReviewFormProps {
  review: Review
  onCancel: () => void
  onSubmit: (formData: Review) => void
}

const mediaTypes: string[] = [
  'Book',
  'Movie',
  'Podcast',
  'TV',
];

const mediaTypeToOption = (mediaType: string): Option => ({
  value: mediaType,
  label: mediaType,
});

const ReviewForm = (props: ReviewFormProps): JSX.Element => {
  const { review, onCancel, onSubmit } = props;
  const { media } = review;

  const mediaDetails = () => {
    if (!media) {
      return (
        <div className='bg-light p-3 mb-3'>
          <Input type="text" name="media[title]" label="Title" />
          <Input type="text" name="media[url]" label="url" />
          <Select
            name="media[media_type]"
            label="Media Type"
            options={mediaTypes.map(mediaTypeToOption)}
          />
        </div>
      )
    } else {
      return (
        <div className='bg-light p-3 mb-3'>
          <p>{`Title: ${media.title}`}</p>
          <p>{`Media Type: ${media.media_type}`}</p>
          <p>{`Link: ${media.url}`}</p>
        </div>
      )
    }
  }

  return (
    <Formik initialValues={review} onSubmit={onSubmit}>
      <Form>
        <h2>Media details</h2>
        {mediaDetails()}

        <h2>Review</h2>
        <Input type="number" name="score" label="Score" />
        <Input type="text" name="title" label="Title" />
        <Input type="text" name="content" label="Content" />
        <Input type="hidden" name="media.id" />
        <hr />
        <button className="btn" type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </Form>
    </Formik>
  )
}

export default ReviewForm
