import { gql } from 'apollo-server';

export default gql`
  type User {
    name: String
    email: String
    active: Boolean
  }

  type AuthenticationOutput {
    token: String
  }

  type UserConnectionOutput {
    count: Int
    edges: [User]
  }

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