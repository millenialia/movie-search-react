import {Ring} from "./Loader.styled"
import { Hearts } from 'react-loader-spinner'


export const Loader = () => {
  return (
    <Ring>
<Hearts
  height="80"
  width="80"
  color="rgba(240, 46, 170)"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass="loader"
  visible={true}
/>

      </Ring>

  )
}
