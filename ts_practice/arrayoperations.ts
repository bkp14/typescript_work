let fruits1: string[]=['apple','orange','nannari'];

console.log(fruits1.sort());
console.log(fruits1.pop())
fruits1.push('papaya')
console.log(fruits1.concat('fig','kiwi'))

import { fruits } from "./arrays";
console.log(fruits.indexOf('apple'))

const nums: number[]= [1, 2, 3];

const doubled = nums.map(n => n * 2);

console.log(doubled);
const evens = nums.filter(n => n % 2 === 0);

console.log(evens);