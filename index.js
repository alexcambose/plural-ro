const de = number => number % 100 >= 20 || (number > 0 && number % 100 === 0);
const pluralro = (count, singularWord, pluralWord, appendNumber = false) => {
    let word = singularWord;
    if(count > 1) word = pluralWord;
    return count + ' ' + (de(count) ? 'de ' : '') + word;
};

module.exports = {
    de,
    pluralro,
};
