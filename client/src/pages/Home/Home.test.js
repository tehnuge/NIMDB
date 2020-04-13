import React from 'react';
import Home from './';
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/react-testing';
import {useReviewsFeedQuery, ReviewsFeedDocument} from '../../graphql';

const mocks = [
  {
    request: {
      query: ReviewsFeedDocument,
    },
    result: () => {
      // do something, such as recording that this function has been called
      // ...
      return {
        data: {
          review: { id: '1', title: 'Buck', score: 5, content: 'yes' },
        },
      }
    },
  },
];

it('renders', () =>{

  TestRenderer.create(
    <MockedProvider mocks={mocks} AddTypeName={false}>
      <Home></Home>
    </MockedProvider>
  )
});

// test('renders learn react link', () => {
//   const { getByText } = render(<Home />);
//   const linkElement = getByText(/Sign in with Google/i);
//   expect(linkElement).toBeInTheDocument();
// });
