import {Post, PostUI} from '~interfaces';

export const post: Post = {
  userId: 1,
  id: 1,
  title:
    'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

export const postWithFavorite: PostUI = {
  userId: 1,
  id: 2,
  title: 'Qui est esse',
  body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  favorite: true,
};

export const postWithNoFavorite: PostUI = {
  userId: 1,
  id: 3,
  title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
  body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  favorite: false,
};

export const postList = [postWithFavorite, postWithNoFavorite];
