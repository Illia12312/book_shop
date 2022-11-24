import "./Checkbox.css";

const Checkbox = () =>{
    return(
        <label className="check option">
            <input className="checkInput" type="checkbox"/>
            <span className="checkbox"></span>
        </label>
    )
}

export default Checkbox;