console.log("JS Connected");

function fizzBuzz(x) {
    for (i=1; i<=x; i++) {
        if (i % 5 == 0 && i%3 == 0) {
            console.log("fizzbuzz")
        }
        else if (i % 5 == 0) {
            console.log("buzz")
        }
        else if (i%3 == 0) {
            console.log("fizz")
        }
        else {
            console.log(i);
        }
    }
}
fizzBuzz(100);