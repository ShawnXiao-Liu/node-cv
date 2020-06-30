import { IPixel } from './pixel'

export interface MatrixColumn extends Number {}
export interface MatrixRow extends Number {}

export class Column extends Array {
  [index: number] : any
  public length: number = 0

  public constructor( props1: number[] | number ) {
    super()
    if (typeof props1 === 'number') {
      const length = props1
      for (let i = 0; i < length; i ++) {
        return new Column(new Array(length))
      }
    } else {
      this.length = props1.length
      props1.forEach( (value, index) => {
        this[index] = value
      })
    }
  }
}

export class Row extends Array {
  [index: number] : any
  public length: number = 0

  public constructor( props1: number[] | number ) {
    super()
    if (typeof props1 === 'number') {
      const length = props1
      for (let i = 0; i < length; i ++) {
        return new Column(new Array(length))
      }
    } else {
      this.length = props1.length
      props1.forEach( (value, index) => {
        this[index] = value
      })
    }
  }
}

export interface IRGBImage {
  R: IPixel[],
  G: IPixel[],
  B: IPixel[]
}