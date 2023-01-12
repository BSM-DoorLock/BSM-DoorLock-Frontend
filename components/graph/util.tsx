export const topSix = (arr: number[]) => {
    const newArr: number[] = [];
    for(let i=0; i<6; i++){
        if(arr[i] !== undefined) newArr.push(arr[i]);
    }
    return newArr;
}

export const init = {
    labels: [],
    datasets: [],
}