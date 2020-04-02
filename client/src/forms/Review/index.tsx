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

  return (
    <Formik initialValues={review} onSubmit={onSubmit}>
      <Form>
        <Input type="number" name="score" label="Score" />
        <Input type="text" name="title" label="Title" />
        <Input type="text" name="content" label="Content" />
        <Select
          name="mediaType"
          label="Media Type"
          options={mediaTypes.map(mediaTypeToOption)}
        />
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
