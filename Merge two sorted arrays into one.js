function mergeArrays(arr1, arr2) {
    return [...new Set(arr1.sort().concat(arr2.sort()).sort(function compareNumbers(a, b) {
        return a - b;
    }))];


}
