import { PubSub, gql } from 'apollo-server';
import userTypes from './modules/user/userType';
import { User } from './modules/user/userModel';

export interface GraphQLContext {
  user: User,
  pubsub: PubSub,
}

const graphqlTypes = gql`
  type Mutation {
    register(name: String, email: String, password: String): AuthenticationOutput
    login(email: String, password: String): AuthenticationOutput
  }

  type Query {
    me: User
    user(_id: String): User
    users(search: String, first: Int, after: Int): UserConnectionOutput
  }
`;

export default [graphqlTypes, userTypes];
