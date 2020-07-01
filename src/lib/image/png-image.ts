import Matrix from '../matrix'
import { Column } from '../type/index'

export interface IPngPixel {
  R: number
  G: number
  B: number
  alpha: number
}

export  interface IPngImage {
  R: Matrix
  G: Matrix
  B: Matrix
  alpha: Matrix
}

export default class PngImage implements IPngImage{
  public R: Matrix = new Matrix()
  public G: Matrix = new Matrix()
  public B: Matrix = new Matrix()
  public alpha: Matrix = new Matrix()

  constructor(props: IPngImage | IPngPixel[][]) {

    if (props instanceof Array) {
      let rChannel: Column[] = []
      let gChannel: Column[] = []
      let bChannel: Column[] = []
      let alphaChannel: Column[] = []
      props.forEach( (item, index) => {
        const rColumn: number[] = []
        const gColumn: number[] = []
        const bColumn: number[] = []
        const alphaColumn: number[] = []

        item.forEach( (pixel: IPngPixel, index: number) => {
          rColumn.push(pixel.R)
          gColumn.push(pixel.G)
          bColumn.push(pixel.B)
          alphaColumn.push(pixel.alpha)
        })

        rChannel.push(rColumn)
        gChannel.push(gColumn)
        bChannel.push(bColumn)
        alphaChannel.push(alphaColumn)
      })
      this.R = new Matrix(rChannel)
      this.G = new Matrix(gChannel)
      this.B = new Matrix(bChannel)
      this.alpha = new Matrix(alphaChannel)
    } else if (<IPngImage>props)  {
      this.R = props.R
      this.G = props.G
      this.B = props.B
      this.alpha = new Matrix(props.R.size[0], props.R.size[1]).fill(1)
    }
  }
} 