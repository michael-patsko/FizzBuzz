const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please choose a number: ', num => {

for (let i = 1; i <= num; i++) {
    let output = "";
    if (i%3 === 0) output = output.concat("Fizz");
    if (i%5 === 0) output = output.concat("Buzz");    
    if (i%7 === 0) output = output.concat("Bang"); 
    if (i%11 === 0) output = "Bong";
    if (i%13 === 0) {
        tempIndex = output.search("B");
        if (tempIndex === -1) {
            output += "Fezz";
        } else {
        output = output.slice(0, tempIndex) + "Fezz" + output.slice(tempIndex);
        }
    }
    if (i%17 === 0) {
        output = ((output.split(/(?=[A-Z])/)).reverse()).join('');
    }
    output === "" ? console.log(i) : console.log(output);
}    

readline.close();
});
