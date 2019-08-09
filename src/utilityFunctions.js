import { type } from "os";

const utility = {
  findName(query, str) {
    let reg = new RegExp(query);
    return reg.test(str.name);
  },
  capitalizeFirst(str) {
    if (str) {
      let arr = str.split("");
      arr[0] = arr[0].toUpperCase();
      return arr.join("");
    } else {
      return "";
    }
  },
};

export default utility;
