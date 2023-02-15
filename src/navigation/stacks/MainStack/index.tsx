import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Route} from '../../types';

import PostDetailScreen from '~screens/PostDetail';
import PostListScreen from '~screens/PostList';

const Stack = createNativeStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen name={Route.PostList} component={PostListScreen} />
      <Stack.Screen name={Route.PostDetail} component={PostDetailScreen} />
    </Stack.Navigator>
  );
};

export default ProductStack;
