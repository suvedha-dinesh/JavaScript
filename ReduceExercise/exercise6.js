var voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];

  // function voterResults(arr) {
  //  // your code here
  //   let obj = {
  //      numYoungVotes: 0,
  //     numYoungPeople: 0,
  //     numMidVotesPeople: 0,
  //     numMidsPeople: 0,
  //     numOldVotesPeople: 0,
  //     numOldsPeople: 0,
  //   }

  //   arr.forEach((item)=>{
  //     if(item.age<=25){
  //       obj.numYoungVotes += item.voted ? 1 : 0;
  //       obj.numYoungPeople += 1;
  //     } if(item.age > 25 && item.age<=36){
  //       obj.numMidsPeople += item.voted ? 1 : 0;
  //       obj.numMidVotesPeople += 1;
  //     } else if(item.age>36 && item.age<=55){
  //       obj.numOldsPeople += item.voted ? 1 : 0;
  //       obj.numOldVotesPeople += 1;
  //     }
  //   })
  //   return obj;
  // }

  const voterSummary = (age) => {
    if (age <= 25) {
      return ["numYoungVotes", "numYoungPeople"];
    }
    if (age > 25 && age <= 36) {
      return ["numMidVotesPeople", "numMidsPeople"];
    } else return ["numOldVotesPeople", "numOldsPeople"];
  };
  function voterResults(arr) {
    return arr.reduce((acc, curr) => {
      const [prop, voterProp] = voterSummary(curr.age);
      acc[prop] = (acc[prop] || 0) + 1;
      if (curr.voted) {
        acc[voterProp] = (acc[voterProp] || 0) + 1;
      }
      return acc;
    }, {});
  }
  console.log(voterResults(voters)); // Returned value shown below:
  /*
  { numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
  }
  */
