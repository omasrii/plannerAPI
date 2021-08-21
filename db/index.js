
const Sequelize = require("sequelize");
const sequelize = new Sequelize("workoutplanner", "root", "banana", {
  host: "localhost",
  dialect: "mysql"
});
var initModels = require("../models/init-models");
var models = initModels(sequelize);
// console.log(models);

// models.User.findAll({ where: { username: "tony" }}).then(...);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

const findUser = (username) => {
  return new Promise((resolve, reject) => {
      models.Users.findOne({
      where: {
        name: username
      }
    })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      })
  })
}

const getSessions = async (username, limit = 100, offset = 0) => {
  try {
    let { id } = await findUser(username)
    return new Promise(async (resolve, reject) => {
      const sessions = await models.Sessions.findAll({
        where: {
          user_id: id
        },
        limit: Number(limit),
        offset: Number(offset)
      })

      resolve(sessions);
    })
  } catch(err) {
    reject(err);
  }
}
let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
// //add a phase for user 1
// models.Phase.create({
//   date: date,
//   user_id: 1
// })
// add a mesocycle
// models.Mesocycle.create({
//   date: date,
//   user_id: 1,
//   phase_id: 1
// })
// models.Microcycle.create({
//   date: date,
//   deload: 0,
//   mesocycle_id: 1,
//   phase_id: 1,
//   user_id: 1,
// })
// models.Sessions.create({
//   date: date,
//   microcycle_id: 1,
//   mesocycle_id: 1,
//   phase_id: 1,
//   user_id: 1,
//   name: "brolifts"
// })

module.exports = {
  findUser,
  getSessions
};