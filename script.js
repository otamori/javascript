
const string = ('Socorram-me, subi no ônibus em Marrocos');
console.log(string)

function checkPalindrome(str) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'Não é palindrome';
        }
    }
    return 'É palindrome';
}

// call the function
const value = checkPalindrome(string);

console.log(value);