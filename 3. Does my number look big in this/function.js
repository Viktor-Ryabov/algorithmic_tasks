function narcissistic(value) {
    const workArr = value.toString().split("");
    if (workArr.length < 2){
      return true
    }
    let resultArr = [];
    for (let i = 0; i < workArr.length; i++){
      resultArr.push(workArr[i]**(workArr.length));
    }
    return resultArr.reduce((a, b) => a + b) == value
  }
  