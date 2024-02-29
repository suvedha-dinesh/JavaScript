const str = (arr) => {
    return arr.reduce((a, b) => a + b, "");
  }

  console.log(str([1,2,3])); // 123