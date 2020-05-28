
function balancedBraces(string) {
  let braces = ['(', ')', '[', ']', '{', '}'];
  let positionObject = {};
  braces.forEach(bracket =>{
    var position = foo.indexOf(bracket);
    while(position > -1) {
        positionObject['' + bracket].push(position);
        position = string.indexOf(bracket, position+1);
    console.log(pos, '1111');
  }
  });
//   var position = foo.indexOf("b");
//   while(pos > -1) {
//       console.log(pos, '0000');
//       pos = foo.indexOf("b", pos+1);
// console.log(pos, '1111');
// }
  
  return args;
}

export {
  balancedBraces,
};
