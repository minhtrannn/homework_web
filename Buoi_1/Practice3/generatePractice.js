'use strict'

function generate(testLengthArray){
  const results = [];
  for(let i = 0 ; i < testLengthArray.length ; i++)
  {
      let newItem = {
        input : [],
        output : null,
        target : null,
      }
      for(let j = 0 ; j < testLengthArray[i] ; j++)
      {
        newItem.input.push(Math.floor(Math.random()*20000 - 10000));
      }
      
      newItem.input.sort((a,b) =>{
        return a-b;
      });
      if(i==0)
      {
          newItem.target=100001;
          newItem.output=newItem.input.indexOf(newItem.target);
      } else if(i==1)
      {
          newItem.target = newItem.input[0];
          newItem.output = 0;
      } else if(i==2)
      {
          newItem.target = newItem.input[newItem.input.length - 1];
          newItem.output = newItem.input.length - 1;
      } else if(i==3)
      {
          newItem.target=newItem.input[2];
          newItem.output=2;
      } else
      {
          newItem.target = Math.floor(Math.random()*20000 - 10000);
          newItem.output = newItem.input.indexOf(newItem.target)
      }

      results.push(newItem);
  }
  return results;
}

module.exports = generate
