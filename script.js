// var table = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// var value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (i = 0; i < table.length; i++) {
//     for (j = 0; j < value.length; j++) {
//         console.log(`${table[i]} X ${value[j]} = ${table[i] * value[j]}`)
//     }
// }

var userInput = prompt("Eneter your Name");
var lenght = userInput.length;
var result = "";

for (var i = 0; i < lenght; i++) {
    if (i == 0) {
        result += userInput[i].toUpperCase()
    }
    else {
        result += userInput[i].toLowerCase()
    }
}

console.log(result);
