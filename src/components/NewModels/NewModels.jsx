import "./NewModels.css";
import Card from "../Card/Card";

const NewModels = () =>{
    return(
        <div className="newModels">
            <h3 className="newModelsBookShop">Book Shop</h3>
            <h3 className="newModelsTitle">Новые Поступления</h3>
            <div className="newModelsItems">
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
                <Card type="simple"/>
            </div>
            <button className="newModelsButton">ПОКАЗАТЬ ЕЩЁ</button>
        </div>
    )
}

export default NewModels;