import { Column } from './lib/column'
import { Matrix } from './lib/matrix'

const c0 = new Column([1, 2, 3, 4, 5])
const c1 = new Column(200).fill(1)
const c2 = new Column(200).fill(2)
const c3 = new Column(200).fill(3)
const c4 = new Column(200).fill(4)
const m1 = new Matrix([c1, c2, c3, c4])
const m2 = new Matrix(100, 100)

console.log(m1)
console.log(m2)

console.log(c0)
console.log(c0[10] = 10)
console.log(c0)