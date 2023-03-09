function XO(str) {
    let result = 0;
    let workArr = str.toLowerCase().split("");
    for (let i = 0; i < workArr.length; i++) {
        if (workArr[i] == "o") {
            result = result + 1;
        } else if (workArr[i] == "x") {
            result = result - 1;
        }
    }
    return result == 0 ? true : false;
}
