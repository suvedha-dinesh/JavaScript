const total = (arr) => {
    return arr.reduce((a, b) => a + b, 0);
  }

  console.log(total([1,2,3])); // 6