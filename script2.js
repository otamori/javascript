
const frase = ('arara');
const remove = frase.replace(/[^a-zA-Z]/g, "").toLowerCase();
const inverte = remove.split('').reverse().join('').toLowerCase();

if (inverte == remove){
    console.log(`${frase} É um palindrome`)

}else
    console.log(`${frase} Não é um palindrome`)

console.log(inverte)
console.log(remove)
process.exit();