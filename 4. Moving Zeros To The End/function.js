function moveZeros(arr) {
    let zeroArr = [];
    let numberArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zeroArr.push(arr[i]);
        } else {
            numberArr.push(arr[i]);
        }
    }
    return numberArr.concat(zeroArr);
}
