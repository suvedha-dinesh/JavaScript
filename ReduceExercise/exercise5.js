function flatten(arr) {
    let output = [];
    arr.forEach((item) => {
      if (Array.isArray(item)) {
        output = output.concat(flatten(item));
      } else output.push(item);
    });
    return output;
  }

  const flatten2 =  (arr) => {
    return arr.reduce((acc,curr)=>{
      if(Array.isArray(curr)){
        acc = acc.concat(flatten2(curr));
      } else acc.push(curr);
      return acc;
    },[])
  }

  var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

  console.log(flatten2(arrays)); // ["1", "2", "3", true, 4, 5, 6];
