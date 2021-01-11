import gql from 'graphql-tag';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            bookCount
            savedBook {
                bookId
                authors
                description
                title
                image
                link
            }

        }
    }
`;