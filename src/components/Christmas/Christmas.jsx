import './Christmas.css';
import newImg from "../../img/christmas.jpg"

const Christmas = () =>{
    return(
        <div className="christmas">
            <img src={newImg} alt="christmas" className='christmasImg'/>
        </div>
    )
}

export default Christmas;