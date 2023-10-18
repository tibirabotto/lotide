const password = process.argv[2]

const obfuscate = (word) => {
    const wordArray = word.split("")
    let newPassword = "";
    for(let letter of wordArray) {
        if (letter === "a") {
            newPassword += "4"
        } else if (letter === "e") {
            newPassword += "3"
        } else if (letter === "o") {
            newPassword += "0"
        } else if (letter === "l") {
            newPassword += "1"
        } else {
            newPassword += letter
        }
    }

    return newPassword
}

console.log(obfuscate(password));