import gql from 'graphql-tag';

export const GET_ME = gql
`{
    me{
        _id
        email
        username
        savedBooks {
            bookId
            title
            description
            authors
            image 
            link
        }
    }
}
`;