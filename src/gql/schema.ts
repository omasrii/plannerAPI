const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: Int!
    weight: Int!
    name: String!
  }

  type Phase {
    id: Int!
    date: String!
    user_id: Int!
    name: String!
  }

  type Mesocycle {
    id: Int
    date: String!
    phase_id: Int!
    user_id: Int!
  }

  type Microcycle {
    id: Int!
    date: String!
    deload: Boolean
    mesocycle_id: Int!
    phase_id: Int!
    user_id: Int!
  }

  type Session {
    id: Int!
    date: String!
    name: String!
    microcycle_id: Int!
    mesocycle_id: Int!
    phase_id: Int!
    user_id: Int!
  }

  type Set {
    id: Int!
    load: Int!
    reps: Int!
    session_id: Int!
    user_id: Int!
  }

  type Query {
    user(id: Int!): User
    users(limit: Int, offset: Int): [User]

    phase(id: Int!): Phase
    phases(username: String!, limit: Int, offset: Int): [Phase]

    mesocycle(id: Int!): Mesocycle
    mesocycles(username: String!, limit: Int, offset: Int): [Mesocycle]

    microcycle(id: Int!): Microcycle
    microcycles(username: String!, limit: Int, offset: Int): [Microcycle]

    session(id: Int!): Session
    sessions(username: String!, limit: Int, offset: Int): [Session]

    set(id: Int!): Set
    sets(username: String!, limit: Int, offset: Int): [Set]
  }

  type Mutation {
    createUser(name: String!, weight: Int!): User!
    updateUser(id: Int!, name: String!, weight: Int!): User!

    createPhase(
      username: String!
      date: String!
      user_id: Int!
      name: String!
    ): Phase!
    updatePhase(id: Int!, date: String!, user_id: Int!, name: String!): Phase!

    createMesocycle(
      username: String!
      date: String!
      phase_id: Int!
      user_id: Int!
    ): Mesocycle!
    updateMesocycle(
      id: Int!
      date: String!
      phase_id: Int!
      user_id: Int!
    ): Mesocycle!

    createMicrocycle(
      username: String!
      date: String!
      deload: Boolean
      mesocycle_id: Int!
      phase_id: Int!
      user_id: Int!
    ): Microcycle!
    updateMicrocycle(
      id: Int!
      date: String!
      deload: Boolean
      mesocycle_id: Int!
      phase_id: Int!
      user_id: Int!
    ): Microcycle!

    createSession(
      username: String!
      date: String!
      name: String!
      microcycle_id: Int!
      mesocycle_id: Int!
      phase_id: Int!
      user_id: Int!
    ): Session!
    updateSession(
      id: Int!
      date: String!
      name: String!
      microcycle_id: Int!
      mesocycle_id: Int!
      phase_id: Int!
      user_id: Int!
    ): Session!

    createSet(
      username: String!
      id: Int!
      load: Int!
      reps: Int!
      session_id: Int!
      user_id: Int!
    ): Set!
    updateSet(
      id: Int!
      load: Int!
      reps: Int!
      session_id: Int!
      user_id: Int!
    ): Set!
  }
`;

module.exports = typeDefs;
