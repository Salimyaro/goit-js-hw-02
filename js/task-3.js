// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
var findLongestWord = function (string) {
    var massive = string.split(' ');
    var longestWord = massive[0];
    for (var i = 1; i < massive.length; i += 1) {
        if (longestWord.length < massive[i].length) {
            longestWord = massive[i];
        }
    }
    return longestWord;
};
/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'
