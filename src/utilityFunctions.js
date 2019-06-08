import { type } from "os";

const utility = {
  findName(query, str) {
    let reg = new RegExp(query);
    return reg.test(str.name);
  },
};

export default utility;
