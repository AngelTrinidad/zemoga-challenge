import {buildRequest} from '../axios';
import {ModuleUrl} from '../types';

import {Comment, Post, RequestConfigPayload} from '~interfaces';

export const getPosts = async (
  config?: RequestConfigPayload,
): Promise<Post[]> => {
  const response = await buildRequest<Post[]>({
    method: 'GET',
    url: `/${ModuleUrl.Posts}`,
    signal: config?.controller?.signal,
  });
  return response.data;
};

export const getPostDetail = async (
  id: number,
  config?: RequestConfigPayload,
): Promise<Post> => {
  const response = await buildRequest<Post>({
    method: 'GET',
    url: `/${ModuleUrl.Posts}/${id}`,
    signal: config?.controller?.signal,
  });
  return response.data;
};

export const getCommentsByPost = async (
  postId: number,
  config?: RequestConfigPayload,
): Promise<Comment[]> => {
  const response = await buildRequest<Comment[]>({
    method: 'GET',
    url: `/${ModuleUrl.Posts}/${postId}/${ModuleUrl.Comments}`,
    signal: config?.controller?.signal,
  });
  return response.data;
};
