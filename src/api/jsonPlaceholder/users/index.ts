import axios from '../axios';
import {ModuleUrl} from '../types';

import {User} from '~interfaces';

export const getUserDetail = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`/${ModuleUrl.Users}/${id}`);
  return response.data;
};
