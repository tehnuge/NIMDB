/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Media = {
   __typename?: 'Media';
  id: Scalars['ID'];
  title: Scalars['String'];
  media_type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type Mutation = {
   __typename?: 'Mutation';
  addReview: Review;
  updateReview: Review;
  findOrAddUser: User;
  addMedia: Media;
};


export type MutationAddReviewArgs = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
  mediaId?: Maybe<Scalars['ID']>;
  userId?: Maybe<Scalars['ID']>;
};


export type MutationUpdateReviewArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};


export type MutationFindOrAddUserArgs = {
  googleId: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationAddMediaArgs = {
  title: Scalars['String'];
  media_type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type Query = {
   __typename?: 'Query';
  medias?: Maybe<Array<Maybe<Media>>>;
  media?: Maybe<Media>;
  reviews?: Maybe<Array<Maybe<Review>>>;
  review?: Maybe<Review>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
};


export type QueryMediaArgs = {
  id: Scalars['ID'];
};


export type QueryReviewArgs = {
  id: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type Review = {
   __typename?: 'Review';
  id: Scalars['ID'];
  title: Scalars['String'];
  score?: Maybe<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  media?: Maybe<Media>;
  user: User;
};

export type User = {
   __typename?: 'User';
  id: Scalars['ID'];
  name: Scalars['String'];
  googleId?: Maybe<Scalars['String']>;
  reviews?: Maybe<Array<Maybe<Review>>>;
};

export type AddMediaMutationVariables = {
  title: Scalars['String'];
  media_type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type AddMediaMutation = (
  { __typename?: 'Mutation' }
  & { addMedia: (
    { __typename?: 'Media' }
    & Pick<Media, 'id' | 'title' | 'media_type' | 'url'>
  ) }
);

export type AddReviewMutationVariables = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  mediaId: Scalars['ID'];
  userId: Scalars['ID'];
};


export type AddReviewMutation = (
  { __typename?: 'Mutation' }
  & { addReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'score' | 'title' | 'content'>
    & { media?: Maybe<(
      { __typename?: 'Media' }
      & Pick<Media, 'id' | 'title'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'googleId' | 'name'>
    ) }
  ) }
);

export type FindOrAddUserMutationVariables = {
  googleId: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};


export type FindOrAddUserMutation = (
  { __typename?: 'Mutation' }
  & { findOrAddUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'googleId' | 'name'>
  ) }
);

export type UpdateReviewMutationVariables = {
  id: Scalars['ID'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['Int']>;
};


export type UpdateReviewMutation = (
  { __typename?: 'Mutation' }
  & { updateReview: (
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'title' | 'content' | 'score'>
    & { media?: Maybe<(
      { __typename?: 'Media' }
      & Pick<Media, 'id' | 'title'>
    )> }
  ) }
);

export type MediaQueryVariables = {
  id: Scalars['ID'];
};


export type MediaQuery = (
  { __typename?: 'Query' }
  & { media?: Maybe<(
    { __typename?: 'Media' }
    & Pick<Media, 'id' | 'title' | 'media_type' | 'url'>
    & { reviews?: Maybe<Array<Maybe<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'title' | 'content' | 'score'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'googleId' | 'name'>
      ), media?: Maybe<(
        { __typename?: 'Media' }
        & Pick<Media, 'id' | 'title' | 'media_type'>
      )> }
    )>>> }
  )> }
);

export type MediaListQueryVariables = {};


export type MediaListQuery = (
  { __typename?: 'Query' }
  & { medias?: Maybe<Array<Maybe<(
    { __typename?: 'Media' }
    & Pick<Media, 'id' | 'title' | 'media_type'>
    & { reviews?: Maybe<Array<Maybe<(
      { __typename?: 'Review' }
      & Pick<Review, 'id' | 'title' | 'content'>
      & { user: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'googleId' | 'name'>
      ), media?: Maybe<(
        { __typename?: 'Media' }
        & Pick<Media, 'id' | 'title' | 'media_type'>
      )> }
    )>>> }
  )>>> }
);

export type ReviewQueryVariables = {
  id: Scalars['ID'];
};


export type ReviewQuery = (
  { __typename?: 'Query' }
  & { review?: Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'score' | 'title' | 'content'>
    & { media?: Maybe<(
      { __typename?: 'Media' }
      & Pick<Media, 'id' | 'title' | 'media_type' | 'url'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  )> }
);

export type ReviewsFeedQueryVariables = {};


export type ReviewsFeedQuery = (
  { __typename?: 'Query' }
  & { reviews?: Maybe<Array<Maybe<(
    { __typename?: 'Review' }
    & Pick<Review, 'id' | 'score' | 'title' | 'content'>
    & { media?: Maybe<(
      { __typename?: 'Media' }
      & Pick<Media, 'id' | 'title' | 'media_type' | 'url'>
    )>, user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'googleId' | 'name'>
    ) }
  )>>> }
);


export const AddMediaDocument = gql`
    mutation AddMedia($title: String!, $media_type: String!, $url: String) {
  addMedia(title: $title, media_type: $media_type, url: $url) {
    id
    title
    media_type
    url
  }
}
    `;
export type AddMediaMutationFn = ApolloReactCommon.MutationFunction<AddMediaMutation, AddMediaMutationVariables>;
export type AddMediaComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddMediaMutation, AddMediaMutationVariables>, 'mutation'>;

    export const AddMediaComponent = (props: AddMediaComponentProps) => (
      <ApolloReactComponents.Mutation<AddMediaMutation, AddMediaMutationVariables> mutation={AddMediaDocument} {...props} />
    );
    
export type AddMediaProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddMediaMutation, AddMediaMutationVariables> & TChildProps;
export function withAddMedia<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddMediaMutation,
  AddMediaMutationVariables,
  AddMediaProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddMediaMutation, AddMediaMutationVariables, AddMediaProps<TChildProps>>(AddMediaDocument, {
      alias: 'addMedia',
      ...operationOptions
    });
};

/**
 * __useAddMediaMutation__
 *
 * To run a mutation, you first call `useAddMediaMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddMediaMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addMediaMutation, { data, loading, error }] = useAddMediaMutation({
 *   variables: {
 *      title: // value for 'title'
 *      media_type: // value for 'media_type'
 *      url: // value for 'url'
 *   },
 * });
 */
export function useAddMediaMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddMediaMutation, AddMediaMutationVariables>) {
        return ApolloReactHooks.useMutation<AddMediaMutation, AddMediaMutationVariables>(AddMediaDocument, baseOptions);
      }
export type AddMediaMutationHookResult = ReturnType<typeof useAddMediaMutation>;
export type AddMediaMutationResult = ApolloReactCommon.MutationResult<AddMediaMutation>;
export type AddMediaMutationOptions = ApolloReactCommon.BaseMutationOptions<AddMediaMutation, AddMediaMutationVariables>;
export const AddReviewDocument = gql`
    mutation AddReview($title: String!, $content: String, $mediaId: ID!, $userId: ID!) {
  addReview(title: $title, content: $content, mediaId: $mediaId, userId: $userId) {
    id
    score
    title
    content
    media {
      id
      title
    }
    user {
      id
      googleId
      name
    }
  }
}
    `;
export type AddReviewMutationFn = ApolloReactCommon.MutationFunction<AddReviewMutation, AddReviewMutationVariables>;
export type AddReviewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddReviewMutation, AddReviewMutationVariables>, 'mutation'>;

    export const AddReviewComponent = (props: AddReviewComponentProps) => (
      <ApolloReactComponents.Mutation<AddReviewMutation, AddReviewMutationVariables> mutation={AddReviewDocument} {...props} />
    );
    
export type AddReviewProps<TChildProps = {}> = ApolloReactHoc.MutateProps<AddReviewMutation, AddReviewMutationVariables> & TChildProps;
export function withAddReview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddReviewMutation,
  AddReviewMutationVariables,
  AddReviewProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, AddReviewMutation, AddReviewMutationVariables, AddReviewProps<TChildProps>>(AddReviewDocument, {
      alias: 'addReview',
      ...operationOptions
    });
};

/**
 * __useAddReviewMutation__
 *
 * To run a mutation, you first call `useAddReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addReviewMutation, { data, loading, error }] = useAddReviewMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      mediaId: // value for 'mediaId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useAddReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<AddReviewMutation, AddReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<AddReviewMutation, AddReviewMutationVariables>(AddReviewDocument, baseOptions);
      }
export type AddReviewMutationHookResult = ReturnType<typeof useAddReviewMutation>;
export type AddReviewMutationResult = ApolloReactCommon.MutationResult<AddReviewMutation>;
export type AddReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<AddReviewMutation, AddReviewMutationVariables>;
export const FindOrAddUserDocument = gql`
    mutation FindOrAddUser($googleId: String!, $id: ID, $name: String) {
  findOrAddUser(googleId: $googleId, id: $id, name: $name) {
    id
    googleId
    name
  }
}
    `;
export type FindOrAddUserMutationFn = ApolloReactCommon.MutationFunction<FindOrAddUserMutation, FindOrAddUserMutationVariables>;
export type FindOrAddUserComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<FindOrAddUserMutation, FindOrAddUserMutationVariables>, 'mutation'>;

    export const FindOrAddUserComponent = (props: FindOrAddUserComponentProps) => (
      <ApolloReactComponents.Mutation<FindOrAddUserMutation, FindOrAddUserMutationVariables> mutation={FindOrAddUserDocument} {...props} />
    );
    
export type FindOrAddUserProps<TChildProps = {}> = ApolloReactHoc.MutateProps<FindOrAddUserMutation, FindOrAddUserMutationVariables> & TChildProps;
export function withFindOrAddUser<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  FindOrAddUserMutation,
  FindOrAddUserMutationVariables,
  FindOrAddUserProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, FindOrAddUserMutation, FindOrAddUserMutationVariables, FindOrAddUserProps<TChildProps>>(FindOrAddUserDocument, {
      alias: 'findOrAddUser',
      ...operationOptions
    });
};

/**
 * __useFindOrAddUserMutation__
 *
 * To run a mutation, you first call `useFindOrAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFindOrAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [findOrAddUserMutation, { data, loading, error }] = useFindOrAddUserMutation({
 *   variables: {
 *      googleId: // value for 'googleId'
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFindOrAddUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<FindOrAddUserMutation, FindOrAddUserMutationVariables>) {
        return ApolloReactHooks.useMutation<FindOrAddUserMutation, FindOrAddUserMutationVariables>(FindOrAddUserDocument, baseOptions);
      }
export type FindOrAddUserMutationHookResult = ReturnType<typeof useFindOrAddUserMutation>;
export type FindOrAddUserMutationResult = ApolloReactCommon.MutationResult<FindOrAddUserMutation>;
export type FindOrAddUserMutationOptions = ApolloReactCommon.BaseMutationOptions<FindOrAddUserMutation, FindOrAddUserMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation UpdateReview($id: ID!, $title: String!, $content: String, $score: Int) {
  updateReview(id: $id, title: $title, content: $content, score: $score) {
    id
    title
    content
    score
    media {
      id
      title
    }
  }
}
    `;
export type UpdateReviewMutationFn = ApolloReactCommon.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;
export type UpdateReviewComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UpdateReviewMutation, UpdateReviewMutationVariables>, 'mutation'>;

    export const UpdateReviewComponent = (props: UpdateReviewComponentProps) => (
      <ApolloReactComponents.Mutation<UpdateReviewMutation, UpdateReviewMutationVariables> mutation={UpdateReviewDocument} {...props} />
    );
    
export type UpdateReviewProps<TChildProps = {}> = ApolloReactHoc.MutateProps<UpdateReviewMutation, UpdateReviewMutationVariables> & TChildProps;
export function withUpdateReview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  UpdateReviewMutation,
  UpdateReviewMutationVariables,
  UpdateReviewProps<TChildProps>>) {
    return ApolloReactHoc.withMutation<TProps, UpdateReviewMutation, UpdateReviewMutationVariables, UpdateReviewProps<TChildProps>>(UpdateReviewDocument, {
      alias: 'updateReview',
      ...operationOptions
    });
};

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      score: // value for 'score'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        return ApolloReactHooks.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, baseOptions);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = ApolloReactCommon.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const MediaDocument = gql`
    query Media($id: ID!) {
  media(id: $id) {
    id
    title
    media_type
    url
    reviews {
      id
      title
      content
      score
      user {
        id
        googleId
        name
      }
      media {
        id
        title
        media_type
      }
    }
  }
}
    `;
export type MediaComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MediaQuery, MediaQueryVariables>, 'query'> & ({ variables: MediaQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const MediaComponent = (props: MediaComponentProps) => (
      <ApolloReactComponents.Query<MediaQuery, MediaQueryVariables> query={MediaDocument} {...props} />
    );
    
export type MediaProps<TChildProps = {}> = ApolloReactHoc.DataProps<MediaQuery, MediaQueryVariables> & TChildProps;
export function withMedia<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MediaQuery,
  MediaQueryVariables,
  MediaProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MediaQuery, MediaQueryVariables, MediaProps<TChildProps>>(MediaDocument, {
      alias: 'media',
      ...operationOptions
    });
};

/**
 * __useMediaQuery__
 *
 * To run a query within a React component, call `useMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMediaQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MediaQuery, MediaQueryVariables>) {
        return ApolloReactHooks.useQuery<MediaQuery, MediaQueryVariables>(MediaDocument, baseOptions);
      }
export function useMediaLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MediaQuery, MediaQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MediaQuery, MediaQueryVariables>(MediaDocument, baseOptions);
        }
export type MediaQueryHookResult = ReturnType<typeof useMediaQuery>;
export type MediaLazyQueryHookResult = ReturnType<typeof useMediaLazyQuery>;
export type MediaQueryResult = ApolloReactCommon.QueryResult<MediaQuery, MediaQueryVariables>;
export const MediaListDocument = gql`
    query MediaList {
  medias {
    id
    title
    media_type
    reviews {
      id
      title
      content
      user {
        id
        googleId
        name
      }
      media {
        id
        title
        media_type
      }
    }
  }
}
    `;
export type MediaListComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MediaListQuery, MediaListQueryVariables>, 'query'>;

    export const MediaListComponent = (props: MediaListComponentProps) => (
      <ApolloReactComponents.Query<MediaListQuery, MediaListQueryVariables> query={MediaListDocument} {...props} />
    );
    
export type MediaListProps<TChildProps = {}> = ApolloReactHoc.DataProps<MediaListQuery, MediaListQueryVariables> & TChildProps;
export function withMediaList<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  MediaListQuery,
  MediaListQueryVariables,
  MediaListProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, MediaListQuery, MediaListQueryVariables, MediaListProps<TChildProps>>(MediaListDocument, {
      alias: 'mediaList',
      ...operationOptions
    });
};

/**
 * __useMediaListQuery__
 *
 * To run a query within a React component, call `useMediaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useMediaListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMediaListQuery({
 *   variables: {
 *   },
 * });
 */
export function useMediaListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<MediaListQuery, MediaListQueryVariables>) {
        return ApolloReactHooks.useQuery<MediaListQuery, MediaListQueryVariables>(MediaListDocument, baseOptions);
      }
export function useMediaListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MediaListQuery, MediaListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MediaListQuery, MediaListQueryVariables>(MediaListDocument, baseOptions);
        }
export type MediaListQueryHookResult = ReturnType<typeof useMediaListQuery>;
export type MediaListLazyQueryHookResult = ReturnType<typeof useMediaListLazyQuery>;
export type MediaListQueryResult = ApolloReactCommon.QueryResult<MediaListQuery, MediaListQueryVariables>;
export const ReviewDocument = gql`
    query Review($id: ID!) {
  review(id: $id) {
    id
    score
    title
    content
    media {
      id
      title
      media_type
      url
    }
    user {
      id
      name
    }
  }
}
    `;
export type ReviewComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ReviewQuery, ReviewQueryVariables>, 'query'> & ({ variables: ReviewQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const ReviewComponent = (props: ReviewComponentProps) => (
      <ApolloReactComponents.Query<ReviewQuery, ReviewQueryVariables> query={ReviewDocument} {...props} />
    );
    
export type ReviewProps<TChildProps = {}> = ApolloReactHoc.DataProps<ReviewQuery, ReviewQueryVariables> & TChildProps;
export function withReview<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ReviewQuery,
  ReviewQueryVariables,
  ReviewProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ReviewQuery, ReviewQueryVariables, ReviewProps<TChildProps>>(ReviewDocument, {
      alias: 'review',
      ...operationOptions
    });
};

/**
 * __useReviewQuery__
 *
 * To run a query within a React component, call `useReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
        return ApolloReactHooks.useQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, baseOptions);
      }
export function useReviewLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReviewQuery, ReviewQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReviewQuery, ReviewQueryVariables>(ReviewDocument, baseOptions);
        }
export type ReviewQueryHookResult = ReturnType<typeof useReviewQuery>;
export type ReviewLazyQueryHookResult = ReturnType<typeof useReviewLazyQuery>;
export type ReviewQueryResult = ApolloReactCommon.QueryResult<ReviewQuery, ReviewQueryVariables>;
export const ReviewsFeedDocument = gql`
    query ReviewsFeed {
  reviews {
    id
    score
    title
    content
    media {
      id
      title
      media_type
      url
    }
    user {
      id
      googleId
      name
    }
  }
}
    `;
export type ReviewsFeedComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<ReviewsFeedQuery, ReviewsFeedQueryVariables>, 'query'>;

    export const ReviewsFeedComponent = (props: ReviewsFeedComponentProps) => (
      <ApolloReactComponents.Query<ReviewsFeedQuery, ReviewsFeedQueryVariables> query={ReviewsFeedDocument} {...props} />
    );
    
export type ReviewsFeedProps<TChildProps = {}> = ApolloReactHoc.DataProps<ReviewsFeedQuery, ReviewsFeedQueryVariables> & TChildProps;
export function withReviewsFeed<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  ReviewsFeedQuery,
  ReviewsFeedQueryVariables,
  ReviewsFeedProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, ReviewsFeedQuery, ReviewsFeedQueryVariables, ReviewsFeedProps<TChildProps>>(ReviewsFeedDocument, {
      alias: 'reviewsFeed',
      ...operationOptions
    });
};

/**
 * __useReviewsFeedQuery__
 *
 * To run a query within a React component, call `useReviewsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function useReviewsFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ReviewsFeedQuery, ReviewsFeedQueryVariables>) {
        return ApolloReactHooks.useQuery<ReviewsFeedQuery, ReviewsFeedQueryVariables>(ReviewsFeedDocument, baseOptions);
      }
export function useReviewsFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ReviewsFeedQuery, ReviewsFeedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ReviewsFeedQuery, ReviewsFeedQueryVariables>(ReviewsFeedDocument, baseOptions);
        }
export type ReviewsFeedQueryHookResult = ReturnType<typeof useReviewsFeedQuery>;
export type ReviewsFeedLazyQueryHookResult = ReturnType<typeof useReviewsFeedLazyQuery>;
export type ReviewsFeedQueryResult = ApolloReactCommon.QueryResult<ReviewsFeedQuery, ReviewsFeedQueryVariables>;