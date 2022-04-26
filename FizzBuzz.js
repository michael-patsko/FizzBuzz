for (let i = 1; i <= 100; i++) {
    var output = "";
    if (i%3 == 0) output = output.concat("Fizz");
    if (i%5 == 0) output = output.concat("Buzz");    
    i%3 != 0 && i%5 != 0 ? console.log(i) : console.log(output);
}