import './NewModels';
import { useEffect, useState } from 'react';

const NewModels = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://633db5337e19b17829149247.mockapi.io/sneakers/sneakers')
        .then((response) => response.json())
        .then((data) => console.log(data));
      }, []);

    // console.log(data);

    return(
        <div className="newModels">

        </div>
    )
}

export default NewModels;