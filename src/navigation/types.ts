import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Route {
  PostList = 'PostList',
  PostDetail = 'PostDetail',
}

export type MainStackParamList = {
  [Route.PostList]: undefined;
  [Route.PostDetail]: {
    id: number;
  };
};

export type MainRoute<R extends keyof MainStackParamList> = RouteProp<
  MainStackParamList,
  R
>;

export type MainScreen<R extends keyof MainStackParamList> = {
  route: MainRoute<R>;
  navigation: NativeStackNavigationProp<MainStackParamList, R>;
};
