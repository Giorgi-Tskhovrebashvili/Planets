import { ImageType } from "../../types"

const Image = ({image, className}: ImageType) => {
  return <img className={className} src={image} alt="" />
}

export default Image
