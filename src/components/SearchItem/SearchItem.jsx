import "./SearchItem.css";

const SearchItem = ({name, author, price, img}) =>{
    return(
        <div className="searchItem">
            <div className='searchImgHolder'>
                <img src={img} alt="" className="searchImg" />
            </div>
            <div className="infoHolderLL">
                <div className="searchName">{name}</div>
                <div className="searchAuthor">{author}</div>
                <div className="searchPrice">{price} грн.</div>
            </div>
        </div>
    )
}

export default SearchItem;