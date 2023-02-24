"use strict";

class UserStorage {
  static #user = {
    //#은닉화
    id: ["ga117", "gahg117", "이가형"],
    psword: ["dash117", "dash117@", "이가형@"],
    name: ["가", "가형", "이가형"],
  };

  // static getUsers(...fields) {
  //   const users = this.#user;
  //   const newUsers = fields.reduce((newUsers, field) => {
  //     if (users.hasOwnProperty(field)) {
  //       newUsers[field] = users[field];
  //     }
  //     return newUsers;
  //   }, {});
  //   return newUsers;
  // }

  static getUserInfo(id) {
    const users = this.#user;
    const idx = users.id.indexOf(id);
    const usersKeys = Object.keys(users); //=>[id, psword, name]
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#user;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
    return { success: true };
  }
}

module.exports = UserStorage;
