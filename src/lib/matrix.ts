import { MatrixColumn, MatrixRow, Column, Row } from './index'

interface IMatrix {
  [index: number]: Column
  column: MatrixColumn
  row: MatrixRow
  count: number
  size: [MatrixColumn, MatrixRow]
  fill: (num: number) => this
  cell: (col: number, row: number) => any
  copy: () => Matrix
  columnAt: (colIndex: number) => Column
  rowAt: (rowIndex: number) => Row
  transpose: () => Matrix
  forEach: (fcn: (item: any, columnIndex: number, rowIndex: number ) => void) => this
  map: (fcn: (item: any, columnIndex: number, rowIndex: number ) => any) => this
}

class Matrix implements IMatrix {
  [index: number] : Column
  public column: MatrixColumn = 0
  public row: MatrixRow = 0
  public count: number = 0
  public size: [MatrixColumn, MatrixRow] = [this.column, this.row]

  /**
   * 
   * @param colIndex
   * @description Matrix的行查询方法，查询位于colIndex行的所有元素
   * @returns 返回一个新的Row对象
   */
  public columnAt = (colIndex: number): Column => {
    return this[colIndex]
  } 
  
  /**
   * 
   * @param rowIndex
   * @description Matrix的列查询方法，查询位于rowIndex列的所有元素
   * @returns 返回一个新的Row对象
   */
  public rowAt = (rowIndex: number): Row => {
    const row: Row = []
    for (let col = 0; col < this.column; col ++) {
      row.push(this[col][rowIndex])
    }
    return row
  } 

  /**
   * 
   * @description Matrix的拷贝方法
   * @returns 返回一个完全一致的Matrix对象
   */
  public copy = (): Matrix => {
    const result: Column[] = []
    for (let col = 0; col < this.column; col ++) {
      const column: any[] = []
      for (let row = 0; row < this.row; row ++) {
        const value = this[col][row]
        column.push(value)
      }
      result.push(column)
    }
    return new Matrix(result)
  }

  /**
   * 
   * @description Matrix的转置方法，将矩阵的行列对调
   * @returns 返回转置完的矩阵
   */
  public transpose = (): Matrix => {
    this.setPrivateProperties(this.row, this.column)
    const cm = this.copy()
    const result: Column[] = []
    for (let row = 0; row < this.row; row ++) {
      const column: any[] = []
      for (let col = 0; col < this.column; col ++) {
        column.push(cm.cell(col, row))
      }
      this[row] = column
    }
    return this
  }

  /**
   * 
   * @param col 获取的行
   * @param row 获取的列
   * @description Matrix获取指定位置Cell的元素
   * @returns Matrix位于col行row列的元素
   */
  public cell = (col: number, row: number): any => {
    return this[col][row]
  }

  /**
   * 
   * @param value 要填充的值
   * @description 用指定的元素填充Matrix
   * @returns 返回填充后的Matrix
   */
  public fill = (value: number): this => {
    for (let col = 0; col < this.column; col ++) {
      for (let row = 0; row < this.row; row ++) {
        this[col][row] = value
      }
    }
    return this
  }

  /**
   * 
   * @param handler Matrix遍历所有元素时所执行的方法
   * @description 按行遍历Matrix的所有元素，执行handler指定的方法
   * @returns 返回当前Matrix
   */
  public forEach = (handler: (item: any, columnIndex: number, rowIndex: number ) => void): this => {
    for (let col = 0; col < this.column; col ++) {
      for (let row = 0; row < this.row; row ++) {
        handler(this[col][row], col, row)
      }
    }
    return this
  }

  /**
   * 
   * @param handler  Matrix遍历所有元素时所执行的方法
   * @description 按行遍历Matrix的所有元素，执行handler以对Matrix的元素进行操作
   * @returns 返回操作完成后的Matrix
   */
  public map = (handler: (item: any, columnIndex: number, rowIndex: number ) => any): this => {
    for (let col = 0; col < this.column; col ++) {
      for (let row = 0; row < this.row; row ++) {
        const value = handler(this[col][row], col, row)
        this[col][row] = value !== undefined ? value : this[col][row]
      }
    }
    return this
  }

  private setPrivateProperties = (w: MatrixColumn, h: MatrixRow): void => {
    this.column = h
    this.row = w
    this.size = [h, w]
    this.count = <number>h * <number>w
  }

  private buildMatrixWithColumns = (matrix: Column[]): void => {
    this.setPrivateProperties(matrix[0] ? matrix[0].length : 0, matrix.length)

    matrix.forEach( (column, index) => {
      this[index] = column
    })
  }
  private buildMatrixWithWidthAndHeight = (column: MatrixColumn, row: MatrixRow): void => {
    this.setPrivateProperties(column, row)

    for (let i = 0; i < row; i ++) {
      const temp = new Array(column)
      this[i] = temp
    }
  }

  constructor(props1?: Column[] | MatrixColumn, props2?: MatrixRow) {
    if (typeof props1 !== 'number') {
      this.buildMatrixWithColumns(<Column[]>props1)
    } else {
      this.buildMatrixWithWidthAndHeight(<MatrixColumn>props1, <MatrixRow>props2)
    }
  }
}

export default Matrix