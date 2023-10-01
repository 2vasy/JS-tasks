
/* #1-Напишите программу на JavaScript для сравнения двух объектов, чтобы определить, содержит ли первый объект значения свойств, эквивалентные второму. */

const matches = (obj, source) => 

Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }));
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }));
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true }));

const Object1 ={
    a: 'somestring',
    b: 42,
    c:false,
};

console.log(Object1);
console.log(Object.keys(Object1));

/* #2-Напишите функцию JavaScript, которая переворачивает число. 
Пример х = 32243;
Ожидаемый результат: 34223 */

function reverse_a_number(n)
{
    n = n.toString();  //n = n + "";
    return n.split("").reverse().join(""); 
}
console.log(reverse_a_number(32243));
console.log(reverse_a_number(123678));
console.log(reverse_a_number(764930));

/* #3- Напишите функцию JavaScript, которая проверяет, является ли переданная строка палиндромом или нет?
Палиндром - это слово, фраза или последовательность, которые читаются так же, как и вперед, например, бегут мадам или медсестры. */
function check_Palindrome(str_entry){
    // Change the string into lower case and remove  all non-alphanumeric characters
    const cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    let counter = 0;

// Check whether the string is empty or not
    if(cstr === ""){
        console.log("Nothing found!");
        return false;
    }

// Check if the length of the string is even or odd 

    if((cstr.length) % 2 === 0 ){
        counter = (cstr.length) / 2;
    } else if (cstr.length === 1){
        console.log("Entry is a palindrome.")
        return true;
    }else{
        counter = (cstr.length - 1) / 2;
    }


    for (let x = 0; x < counter; x++){
        if(cstr[x] != cstr.slice(-1-x)[0]) {
            console.log ("Entry is not a palidrome");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
	return true;
}

check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');


//////////
function palindromeChecker(str) {
    str = str.toLowerCase().replace(/[^а-яa-z1-9]/gi, '');
    const lastIndex = str.length - 1;
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[lastIndex - i]) {
            console.log ("Entry is not a palidrome");
            return false;
        }
    }
    console.log("The entry is a palindrome.");
    return true;
}

palindromeChecker('madam');
palindromeChecker('nurses run');
palindromeChecker('fox');