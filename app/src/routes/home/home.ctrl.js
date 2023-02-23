"use strict";

const { use } = require(".");

const output = {
  home: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id: ["ga117", "gahg117", "이가형"],
  psword: ["dash117", "dash117@", "이가형@"],
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "로그인에 실패하셨습니다.",
    });
  },
};

module.exports = {
  output,
  process,
};
