import { Column } from './column'

export interface IMatrix extends Partial<Column[]> { }

export class Matrix extends Array implements IMatrix{

  private buildMatrixWithColumns = (matrix: IMatrix) => {
    matrix.forEach( (column, index) => {
      this[index] = column
    })
  }
  private buildMatrixWithWidthAndHeight = (width: number, height: number) => {
    for (let i = 0; i < height; i ++) {
      const column = new Array(width)
      this[i] = column
    }
  }

  constructor(props1?: IMatrix | number, props2?: number) {
    super()
    if (typeof props1 !== 'number') {
      this.buildMatrixWithColumns(<IMatrix>props1)
    } else {
      this.buildMatrixWithWidthAndHeight(<number>props1, <number>props2)
    }
  }
}