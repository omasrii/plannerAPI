const db = require('../../db');

const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.Users.findByPk(id);
    },
    users: async (root, { limit, offset }, { models }) =>
      await db.getUsers(limit, offset),

    async phase(root, { id }, { models }) {
      return models.Phase.findByPk(id);
    },
    phases: async (root, { username, limit, offset }, { models }) =>
      await db.getPhases(username, limit, offset),

    async mesocycle(root, { id }, { models }) {
      return models.Mesocycle.findByPk(id);
    },

    mesocycles: async (root, { username, limit, offset }, { models }) =>
      await db.getMesocycles(username, limit, offset),

    async microcycle(root, { id }, { models }) {
      return models.Microcycle.findByPk(id);
    },

    microcycles: async (root, { username, limit, offset }, { models }) =>
      await db.getMicrocycles(username, limit, offset),

    async session(root, { id }, { models }) {
      return models.Session.findByPk(id);
    },

    sessions: async (root, { username, limit, offset }, { models }) =>
      await db.getSessions(username, limit, offset),

    async set(root, { id }, { models }) {
      return models.Set.findByPk(id);
    },

    sets: async (root, { username, limit, offset }, { models }) =>
      await db.getSets(username, limit, offset),
  },

  Mutation: {
    createUser: async (root, { name, weight }, { models }) =>
      await db.createUser({ name, weight }),
    updateUser: async (root, { id, name, weight }, { models }) =>
      await db.updateUser({ id, name, weight }),

    createPhase: async (root, { username, date, user_id, name }, { models }) =>
      await db.createPhase(username, { date, user_id, name }),
    updatePhase: async (root, { id, date, user_id, name }, { models }) =>
      await db.updatePhase({ id, date, user_id, name }),

    createMesocycle: async (
      root,
      { username, date, phase_id, user_id },
      { models }
    ) => await db.createMesocycle(username, { date, phase_id, user_id }),
    updateMesocycle: async (
      root,
      { id, date, phase_id, user_id },
      { models }
    ) => await db.updateMesocycle({ id, date, phase_id, user_id }),

    createMicrocycle: async (
      root,
      { username, date, deload, mesocycle_id, phase_id, user_id },
      { models }
    ) =>
      await db.createMicrocycle(username, {
        date,
        deload,
        mesocycle_id,
        phase_id,
        user_id,
      }),

    updateMicrocycle: async (
      root,
      { id, date, deload, mesocycle_id, phase_id, user_id },
      { models }
    ) =>
      await db.updateMicrocycle({
        id,
        date,
        deload,
        mesocycle_id,
        phase_id,
        user_id,
      }),

    createSession: async (
      root,
      { username, date, name, phase_id, mesocycle_id, microcycle_id, user_id },
      { models }
    ) =>
      await db.createSession(username, {
        date,
        name,
        phase_id,
        mesocycle_id,
        microcycle_id,
        user_id,
      }),

    updateSession: async (
      root,
      { id, date, name, phase_id, mesocycle_id, microcycle_id, user_id },
      { models }
    ) =>
      await db.updateSession({
        id,
        date,
        name,
        phase_id,
        mesocycle_id,
        microcycle_id,
        user_id,
      }),

    createSet: async (
      root,
      { username, id, load, reps, session_id, user_id },
      { models }
    ) => await db.createSet(username, { id, load, reps, session_id, user_id }),

    updateSet: async (
      root,
      { id, load, reps, session_id, user_id },
      { models }
    ) =>
      await db.updateSet({
        id,
        load,
        reps,
        session_id,
        user_id,
      }),
  },
};

module.exports = resolvers;
