const db = require('../../db');

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.Users.findByPk(id);
    },
    allUsers: async (root, { limit, offset }, { models }) =>
      await db.getUsers(limit, offset),

    async phase(root, { id }, { models }) {
      return models.Phase.findByPk(id);
    },
    allPhases: async (root, { limit, offset }, { models }) =>
      await db.getPhases(limit, offset),
  },
  Mutation: {
    createUser: async (root, { name, weight }, { models }) =>
      await db.createUser({ name, weight }),
    updateUser: async (root, { id, name, weight }, { models }) =>
      await db.updateUser({ id, name, weight }),
    addPhase: async (root, { username, date, user_id, name }, { models }) =>
      await db.addPhase(username, { date, user_id, name }),
    updatePhase: async (root, { id, date, user_id, name }, { models }) =>
      await db.updatePhase({ id, date, user_id, name }),
  },
};

module.exports = resolvers;
