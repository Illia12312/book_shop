import "./Kid.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataRequestAction } from "../../redux-store/entity/actions";
import img from "C:\\Users\\ilya3\\OneDrive\\Рабочий стол\\Books\\book_shop\\src\\img\\books\\child_1.jpg"


const Kid = () =>{
    const books = useSelector((state) => state.entity.characters)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDataRequestAction())
    }, [])

    console.log(books);

    return(
        <div className="kid">
            <img src={img} alt="img" />
            {books.map((i) =>(
                <div style={{border: "1px solid black"}}>
                    <div>{i.name}</div>
                    <div>{i.author}</div>
                    <img src={i.img} alt="img" />
                </div>
            ))}
        </div>
    )
}

export default Kid;