var arr = new Array(5);

function fillArray() {
	for (let i = 0; i < 5; i++) {
        arr[i] = Math.round(Math.random()*200-100);
    }
    return arr;
}


function replaceFromArray () {
    arr.forEach((element,index) =>{
        if(element < 0) {
            arr[index] = 0;
        }
    });
    return arr;
}


function addToArray() {
    const newArr = [];
	for (let i = 0; i < 5; i++) {
        newArr.push(arr[i]);
        if (i % 2 === 0 && arr[i] === 0) {
            newArr.push(-1);
        }
    }
    return newArr;
}

console.log(fillArray());
console.log(replaceFromArray());
console.log(addToArray());