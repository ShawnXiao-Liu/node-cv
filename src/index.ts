import Matrix from './lib/matrix'
import Zero from './lib/matrix/zero'
import One from './lib/matrix/one'

const c0 = new Array([1, 2, 3, 4, 5])
const c1 = new Array(2).fill({a: 'string'})
const c2 = new Array(6).fill(2)
const c3 = new Array(8).fill(3)
const c4 = new Array(2).fill(4)
const m1 = new Matrix([c1, c2, c3, c4])
const m2 = new Matrix(100, 100)
let count = 0;
m1.fill({R: 255, G: 255, B: 200})
m1.map( (item, col, row) => {
  return item
})
const zero = new Zero(10, 10)
const one = new One(10, 10)
