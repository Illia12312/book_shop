import { useSelector } from "react-redux";

export function useLookinFor(value){
    const items = useSelector((state) => state.books.books);
    let finalArr = [];
    if(value !== ''){
        let counter = 0;
        for(let i=0; i<items.length; i++){
            if(counter===5){
                break
            }
            let name = items[i].name.toLowerCase();
            let newValue = value.toLowerCase();
            name.includes(newValue) ? finalArr.push([items[i].name, items[i].price, items[i].img, items[i].author]) && counter++ : counter+=0;
        }
    }
    let response = finalArr.splice(0,5);
    return {response}
}  