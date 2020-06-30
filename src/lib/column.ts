export interface IColumn extends Partial<number[]> { }

export class Column extends Array implements IColumn {
  public length: number = 0

  public constructor( props1: IColumn | number ) {
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