function convertAndFilter(str) {
    newArr = [];
    
    for (var i = 0; i < str.length; i++) {
        var temp = parseFloat(str[i]);
        if (!isNaN(temp)) {
            newArr.push(temp);
        }
    }
    return newArr;
}

console.log(convertAndFilter("5s4Ad2s3t"));