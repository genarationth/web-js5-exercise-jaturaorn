const people = ['Sofia', 'David', 'Juan'];
//FIFO
// people.push('Sara','Augustin');
// people.shift();
// console.log(people);
//Do part3
const addmid = people.splice(2,0,'Renata','Elena');
console.log(addmid);
console.log(people);