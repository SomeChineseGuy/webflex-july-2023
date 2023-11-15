import { __interactionsRef } from "scheduler/tracing"

const arr = [{
  num:1,
  username: "Steve"
},
{
  num:2,
  username: "Steve"
},{
  num:3,
  username: "Steve"
},{
  num:4,
  username: "Alvin"
}]

// Creates a new array that updates based on the callback you give it
arr.map()

// Filter will filter the array and give you a smaller value of the array
arr.filter()

// Reduce will reduce the array down to one value
arr.reduce()

// forEach === for(let item of arr) {} can't return anything inside of callback
arr.forEach(item => {})

// Looks in the array and finds the one item you are looking for
arr.find(x => x.num === 4);