import Matrix from '../matrix'

export default interface IRgbImage {
  RedChannel: Matrix
  GreenChannel: Matrix
  BlueChannel: Matrix
}