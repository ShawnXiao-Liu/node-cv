import { Column } from './lib'
import Matrix from './lib/matrix'

const c0 = new Column([1, 2, 3, 4, 5])
const c1 = new Column(200).fill(1)
const c2 = new Column(200).fill(2)
const c3 = new Column(200).fill(3)
const c4 = new Column(200).fill(4)
const m1 = new Matrix([c1, c2, c3, c4])
let count = 0;
m1.map( (item, col, row) => {
  return count ++
})
console.log( m1.transpose() )
// m1.transpose()
