const {gql} = require('apollo-server-express');

const typeDefs =gql
`
type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: SavedBookInput): User
    removeBook(bookId: String!): User
}
type User {
    _id: ID
    username: String!
    savedBooks: [Book]
    bookCount: Int
}
type Book {
    authors: [String]
    bookId: String!
    description: String
    title: String!
    image: String
    link: String
}
type Auth {
    token: ID!
    user: User
}
`;

module.exports =typeDefs;