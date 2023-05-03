import _ from "lodash";

export function useMinMax(arr){
    let secondArr = [];
    arr.map((i) => secondArr.push(i.price));

    const min = _.min(secondArr);
    const max = _.max(secondArr);

    return{
        min,
        max
    }
}