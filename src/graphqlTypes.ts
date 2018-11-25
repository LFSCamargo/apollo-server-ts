import { PubSub } from 'apollo-server';
import userTypes from './modules/user/userType';
import { User } from './modules/user/userModel';

export interface GraphQLContext {
  user: User,
  pubsub: PubSub,
}

export default [userTypes];