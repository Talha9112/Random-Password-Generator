function generatePassword(length, includeLowercase, includeNumbers, includeSymbols, includeUppercase) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolChars = "!@#$%^&*()";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numbersChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if (length <= 0) {
        return 'Password length must be at least 1';
    }

    if (allowedChars.length === 0) {
        return 'At least one set of characters needs to be selected';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generateAndDisplayPassword() {
    const passwordLength = 12;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePassword(passwordLength, includeLowercase, includeNumbers, includeSymbols, includeUppercase);
    document.getElementById('passwordOutput').value = password;
}
