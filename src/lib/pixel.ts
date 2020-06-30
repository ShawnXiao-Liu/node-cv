export interface IPixel {
  R: number,
  G: number,
  B: number,
  alpha?: number
}

export class Pixel implements IPixel {
  public R: number
  public G: number
  public B: number
  public alpha?: number


  constructor(props: IPixel) {
    this.R = props.R
    this.G = props.G
    this.B = props.B
    this.alpha = props.alpha
  }
}