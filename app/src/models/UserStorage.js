"use strict";

class UserStorage {
  static #user = {
    //#은닉화
    id: ["ga117", "gahg117", "이가형"],
    psword: ["dash117", "dash117@", "이가형@"],
    name: ["가", "가형", "이가형"],
  };

  static getUsers(...fields) {
    const users = this.#user;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
