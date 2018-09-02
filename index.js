/**
 * Appends "de" preposition if a numeral between 20 and 99 is in the final position.
 * @param number
 * @returns {boolean} If should append "de" preposition
 */
const de = number => number % 100 >= 20 || (number > 0 && number % 100 === 0);

/**
 * Automatically display the correct form of the nouns in the romanian language when counted.
 * @param {number} count - Count
 * @param {string} singularWord - Singular form
 * @param {string} pluralWord - Plural form
 * @param {(string|boolean)} replaceOne - The gender of the noun
 * @param {boolean} ucfirst
 * @returns {string}
 */
const pluralro = (count, singularWord, pluralWord, replaceOne = false, ucfirst = false) => {
    let plural = singularWord;
    // if bigger that 1 switch to plural
    if(count > 1) plural = pluralWord;

    // add "de" preposition if needed
    if(de(count)) plural = 'de ' + plural;

    if(typeof replaceOne === 'string') {
        if(count === 0) {
            if(replaceOne === 'f') plural = 'nicio ' + plural;
            // the masculine and neutral are the same
            else if(replaceOne === 'm' || replaceOne === 'n') plural = 'niciun ' + plural;
        } else if (count === 1) {
            if(replaceOne === 'f') plural = 'o ' + plural;
            // the masculine and neutral are the same
            else if(replaceOne === 'm' || replaceOne === 'n') plural = 'un ' + plural;
        }

    } else {
        plural = count + ' ' + plural;
    }

    if(ucfirst) return plural[0].toUpperCase() + plural.slice(1);
    return plural;
};

module.exports = {
    de,
    pluralro,
};
