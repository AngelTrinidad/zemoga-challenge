import React, {FC} from 'react';

import PostAuthor from './components/PostAuthor';
import PostComments from './components/PostComments';

import {AsyncContent, DetailTemplate, Typography} from '~components';
import {capitalizeFirstLetter} from '~helpers/string';
import {useGetPostDetail} from '~hooks';
import {MainScreen, Route} from '~navigation/types';

const PostDetailScreen: FC<MainScreen<Route.PostDetail>> = ({
  route: {params},
}) => {
  const {data, isLoading, isError, isSuccess} = useGetPostDetail(params.id);
  const title = capitalizeFirstLetter(data?.data.title || '');

  return (
    <DetailTemplate title={title}>
      <AsyncContent isLoading={isLoading} isError={isError}>
        {isSuccess && !!data && (
          <>
            <Typography variant="xl">{data.data.body}</Typography>
            {!!data?.metadata.author && (
              <PostAuthor author={data.metadata.author} />
            )}
            {!!data?.metadata.comments && (
              <PostComments comments={data.metadata.comments} />
            )}
          </>
        )}
      </AsyncContent>
    </DetailTemplate>
  );
};

export default PostDetailScreen;
