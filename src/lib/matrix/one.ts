import { Column, MatrixColumn, MatrixRow } from '../type'
import Matrix from './matrix'

export default class One extends Matrix {
  constructor(props1?: Column[] | MatrixColumn, props2?: MatrixRow) {
    super(props1, props2)
    this.fill(1)
  }
}