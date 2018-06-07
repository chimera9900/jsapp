// const person = {
//   // name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philadelphia',
//     temp: 92
//   }
// }
//
// const {name='Anonymous', age} = person
// console.log(`${name} is ${age}`)
// const {city, temp: temperature} = person.location
// console.log(`It's ${city} in ${temperature}`)

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//       name: 'Penguin'
//
//     }
// }
//
// const {name: publisherName='self-published'} = book.publisher
// console.log(`${publisherName}`)


// const address = ['1', '2', '3', '4']
//
// const [,,state, zipcode] = address
//
// console.log(`You are in ${state} - ${zipcode}`)

const item = ['Coffee', '$2.00', '$2.50', '$2.75']

const [choice,,cost,] = item

console.log(`A medium ${choice} costs ${cost}`)
