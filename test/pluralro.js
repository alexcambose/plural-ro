const test = require('ava');
const pluralro = require('../index').pluralro;

test('without "de" preposition', t => {
    t.true(pluralro(1, 'girafa', 'girafe') === '1 girafa');
    t.true(pluralro(2, 'girafa', 'girafe') === '2 girafe');
    t.true(pluralro(19, 'girafa', 'girafe') === '19 girafe');
    t.true(pluralro(111, 'girafa', 'girafe') === '111 girafe');
    t.true(pluralro(1113, 'girafa', 'girafe') === '1113 girafe');
});
test('with "de" preposition', t => {
    t.true(pluralro(20, 'girafa', 'girafe') === '20 de girafe');
    t.true(pluralro(99, 'girafa', 'girafe') === '99 de girafe');
    t.true(pluralro(120, 'girafa', 'girafe') === '120 de girafe');
    t.true(pluralro(120, 'girafa', 'girafe') === '120 de girafe');
});
test('with replaceOne enabled', t => {
    t.true(pluralro(1, 'girafa', 'girafe', 'f') === 'o girafa');
    t.true(pluralro(1, 'girafa', 'girafe', 'n') === 'un girafa');
    t.true(pluralro(1, 'girafa', 'girafe', 'm') === 'un girafa');
});
test('with ucfirst enabled', t => {
    t.true(pluralro(1, 'girafa', 'girafe', 'f', true) === 'O girafa');
    t.true(pluralro(1, 'girafa', 'girafe', 'n', true) === 'Un girafa');
    t.true(pluralro(1, 'girafa', 'girafe', 'm', true) === 'Un girafa');
});