const test = require('ava');
const de = require('../index').de;

test('from 0 to 19', t => {
    t.false(de(0));
    t.false(de(19));
});
test('20', t => {
    t.true(de(20));
});
test('from 21 to 100', t => {
    t.true(de(21));
    t.true(de(100));
});
test('from 101 to 119', t => {
    t.false(de(101));
    t.false(de(119));
});
test('from 120 to infinity', t => {
    t.true(de(120));
    t.true(de(1000));
    t.true(de(1234));
    t.true(de(12345));
    t.true(de(123456));
    t.true(de(1234567));
    t.true(de(12345678));
    t.true(de(123456789));
});