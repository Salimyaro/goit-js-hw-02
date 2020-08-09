/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */

const minSalary = 500;
const maxSalary = 5000;
const employees = 8;
let totalSalary;

totalSalary =
  Math.round(Math.random() * (maxSalary - minSalary) + minSalary) * employees;

console.log(totalSalary);

/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */

const min = 1;
const max = 50;
let total = 0;

for (let i = min; i <= max; i++) {
  if (i % 2 == 0) {
    total += i;
  }
}

console.log(total);
