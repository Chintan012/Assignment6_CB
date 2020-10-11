/**
 * Looping a Triangle
 */

let result = "";

for (var i = 0; i < 8; i++) {
    for (let j = 0; j < i; j++) {
        result = result.concat("#");
    }
    result = result.concat("\n")
}

console.log(result);