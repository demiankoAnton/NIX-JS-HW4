// =====================================================================================================================

// Task 1

// function camelize(str) {
//     return str.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join('');
// }
//
// console.log(camelize('my-short-string'));

// =====================================================================================================================

// Task 2

// function filterRange(arr, a, b) {
//     if (a > b) {
//         return false;
//     }
//
//     return arr.filter(number => number >= a && number <= b);
// }
//
// console.log(filterRange([5, 3, 8, 1], 1, 4));

// =====================================================================================================================

// Task 3

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         let current = arr[i];
//
//         if (current < a || current > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
//
// filterRangeInPlace(arr, 1, 4);
// console.log(arr);

// =====================================================================================================================

// Task 4

// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((first, second) => second - first);
//
// console.log(arr);

// =====================================================================================================================

// Task 5

// function copySorted(arr) {
//     return arr.slice().sort();
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);

// =====================================================================================================================

// Task 6

// function Calculator(first, second, operation) {
//     let result;
//
//     switch (operation) {
//         case '-':
//             result = first - second;
//             break;
//         case '*':
//             result = first * second;
//             break;
//         case '/':
//             result = first / second;
//             break;
//         default:
//             result = first + second;
//     }
//
//     return result;
// }
//
// console.log(Calculator(2, 3, '*'));

// =====================================================================================================================

// Task 7

// function getNames(users) {
//     return users.map(user => user.name);
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = getNames(users);
// console.log(names);

// =====================================================================================================================

// Task 8

// function sortByAge(arr) {
//     return arr.sort((first, second) => first.age - second.age);
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let arr = [ vasya, petya, masha ];
// sortByAge(arr);
//
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// =====================================================================================================================

// Task 9

// function getAverageAge(arr) {
//     return arr.reduce((first, second) => (first + second.age), 0) / arr.length;
// }
//
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [ vasya, petya, masha ];
// console.log(getAverageAge(arr));

// =====================================================================================================================

// Task 10

// function unique(arr) {
//     return arr.reduce((prev, curr) => {
//         if (!prev.includes(curr)) {
//             prev.push(curr);
//         }
//
//         return prev;
//     }, []);
// }
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
//
// console.log(unique(strings));

// =====================================================================================================================

// Task 11

// function unique(arr) {
//     return Array.from(new Set(arr));
// }
//
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];
//
// console.log(unique(values));

// =====================================================================================================================

// Task 12

// map.keys() возвращает итерируемый объект, а не массив. нужно конвертировать этот объект в массив Array.from(map.keys())

// =====================================================================================================================

// Task 13

// Счетчики независимы так как находяться в разных переменных (их лексическое область видимости разная, так как она создаеться во время присваивания функции в переменную);
// 0, 1
// 0, 1

// =====================================================================================================================

// Task 14

// По скольку объект у нас создался один, то и все его свойства и методы будут работать в его лексической области видимости. Соответственно count один и тот же
// 1
// 2
// 1

// =====================================================================================================================

// Task 15

// function factorial(n) {
//     if (n === 1) {
//         return n;
//     }
//
//     return n * factorial(n - 1);
// }
//
// console.log(factorial(5));