import "./Checkbox.css";

const Checkbox = ({active, setActive}) =>{
    const activeFunc = () =>{
        active ? setActive(false) : setActive(true);
    }
    return(
        <label className="check option">
            <input className="checkInput" type="checkbox" onClick={activeFunc}/>
            <span className="checkbox"></span>
        </label>
    )
}

export default Checkbox;