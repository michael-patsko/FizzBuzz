for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i%3 === 0) output = output.concat("Fizz");
    if (i%5 === 0) output = output.concat("Buzz");    
    output === "" ? console.log(i) : console.log(output);
}