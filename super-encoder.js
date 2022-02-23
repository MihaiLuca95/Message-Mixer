// Import the encryptors functions
const encriptors = require('./encryptors');

const encodeMessage = (str) => {
    // Use the encryptor functions
    return encriptors.reverseCipher(encriptors.symbolCipher(encriptors.caesarCipher(str, 3)))
};

const decodeMessage = (str) => {
    // Use the encryptor functions here.
    return encriptors.reverseCipher(encriptors.caesarCipher(encriptors.symbolCipher(str), 23))
};

// User input / output.

const handleInput = (userInput) => {
    const str = userInput.toString().trim();
    let output;
    if (process.argv[2] === "encode") {
        output = encodeMessage(str);
    }
    if (process.argv[2] === "decode") {
        output = decodeMessage(str);
    }

    process.stdout.write(output + "\n");
    process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);