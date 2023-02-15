import {Comment} from './Comment';
import {User} from './User';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostUI extends Post {
  favorite: boolean;
}

export interface PostWithMetadata {
  data: Post;
  metadata: {
    author?: User;
    comments?: Comment[];
  };
}
