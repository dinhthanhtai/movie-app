import { BiLoaderCircle } from "react-icons/bi";

import './spin.scss';

const Spin = () => {
  return (
    <div className='loader mb-3'> 
        <h3> Loading Data </h3>
        <BiLoaderCircle className="loaderIcon"/>
    </div>
  )
}

export default Spin