function mergeArr(arr1, arr2) {
    let finalArr = [...arr1, ...arr2];
    for (let i = 0; i < finalArr.length; i++) {
        for (let j = i + 1; j < finalArr.length; j++) {
            if (finalArr[j] === finalArr[i]) {
                finalArr.splice(j, 1);
            }
        }
    }
    return finalArr;
}
console.log(mergeArr([1, 2, 3], [4, 1, 2, 5]));