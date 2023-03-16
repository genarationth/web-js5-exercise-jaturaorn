// const people = ['Sofia', 'David', 'Juan'];
//FIFO
// people.push('Sara','Augustin');
// people.shift();
// console.log(people);
//Do part3
// const addmid = people.splice(2,0,'Renata','Elena');
// console.log(addmid);
// console.log(people);
// let temp = '';
// for(let count = 1 ; count < 5; count++){
//     temp += '*'
//     console.log(temp);
// }

// for (let i=1; i<=5; i++){
//     let temp = ''
//     for (let j=1; j<=i; j++){
//         temp += ''
//     }
//     console.log(temp)
// }

// let xValue = 7;

// while (xValue > 0) {
//   console.log(xValue);
//   xValue -= 0.5; 
// }

function SQBackets(n) {
    let i = 1;
    let result = '';
    while (i <= n) {
      result += `[${i}] `;
      i++;
    }
    console.log(result);
  }
  
  SQBackets(10);