// This function is used to flatten the tailwind colors
// for use in /src/types/colors/colortypes.ts

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propName = parent
      ? parent[0].toUpperCase() + parent.substring(1, parent.length) + key
      : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = parent ? `${parent}-${key}` : `${key}`;
    }
  }
  return res;
}

exports.default = flattenObj;
