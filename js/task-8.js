/*
 * Напиши скрипт который подсчитывает общую сумму зарплат работников.
 * Кол-во работников хранится в перемнной employees.
 * Зарплата каждого работника это случайное число от 500 до 5000
 * Записать сумму в переменную totalSalary и вывести в консоль
 */
var minSalary = 500;
var maxSalary = 5000;
var employees = 8;
var totalSalary;
totalSalary =
    Math.round(Math.random() * (maxSalary - minSalary) + minSalary) * employees;
console.log(totalSalary);
/*
 * Напиши скрипт который подсчитывает сумму всех чётных чисел,
 * которые входят диапазон чисел в переменных от min до max.
 * Например, если min=0 и max=5, то диапазон 0-5, и в нём два чётных числа - 2 и 4, их сумма 6.
 */
var min = 1;
var max = 50;
var total1 = 0;
for (var i = min; i <= max; i++) {
    if (i % 2 == 0) {
        total1 += i;
    }
}
console.log(total1);
