function mapArray(arr) {
  try {
    if (Array.isArray(arr)) {
      return arr.map((item) => item * 2);
    } else {
      throw new Error("map is not a function");
    }
  } catch (error) {
    return error;
  }
  //   return;
  //   Array.isArray(arr) ? arr.map((item) => item * 2) : "map is not a function";
}
console.log(mapArray(5));
