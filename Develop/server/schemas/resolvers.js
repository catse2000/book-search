const { User, Book } = require('../models');

const resolvers = {
    Query: {
        books: async () => {
            return Book;
        }
    }
};

module.exports = resolvers;