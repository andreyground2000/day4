                //REDUCE

//map
let resMap = ["Яблоко", "Банан", "Ананас"].reduce((arr, item) => {
    arr.push(item[0]);
    return arr;
}, []);
console.log(resMap);

//filter
let resFilter = ["Яблоко", "Банан", "Ананас"].reduce((arr, item) => {
    if (item[0].toLowerCase() == "а") {
        arr.push(item);
    }
    return arr;    
}, []);
console.log(resFilter);

//forEach
let array = ["Яблоко", "Банан", "Ананас"];
array.reduce((acc, item, index) => {
    acc[index] = `${index + 1}: ${item}`;
    return acc;
}, array);

console.log(array);

                //POLYFILLS

//push

function myPush(array) {   
    for (let i = 0, j = i + 1; i <= arguments.length; i++, j++) {
        array[array.length] = arguments[j];
    }
    array.length = array.length - 2;
    return array;
}

console.log(myPush([45, "dgh"], 34, 598, "jdgjd", "dhjhd", 55, 33));

//pop
function myPop(array) {
    array.length -= 1;
    return array;
}
console.log(myPop(["hddhj", "hkdk2"]));

//concat
function myConcat(arr1, arr2) {
    for (let i = 0; i < arr2.length; i++) {
        arr1[arr1.length] = arr2[i];
    }
    return arr1;
}
console.log(myConcat(['vbn', 34, 'hdh', 67], [23, "djd"]));

//unshift
function myUnshift (arr) {
    let newArr = [];
    for (let i = 0; i <= arr.length; i++) {
        newArr[i] = arr[i];
    }
    for (let i = 0, j = i + 1; i <= arguments.length; i++, j++) {
        arr[i] = arguments[j];
    }
        for (let i = 0, j = (arr.length) - (newArr.length -3); i<newArr.length; i++, j++) {
         arr[j] = newArr[i];
    }
    
    arr.length = arr.length -1;
    return arr;
}

console.log(myUnshift([56, 56, 67, 44,"hy"], "hrkko", "sd"));

//shift

function myShift(array) {
    for (let key in array) {
        if (key == "0") {
            delete array[key];
        }
      }
      return array;

}

console.log(myShift([67, 87, 3456]));
