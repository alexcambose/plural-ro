# plural-ro

[![Build Status](https://travis-ci.org/alexcambose/plural-ro.svg?branch=master)](https://travis-ci.org/alexcambose/plural-ro)

Automatically display the correct form of the nouns in the romanian language when counted.
## Installation
As [npm](https://www.npmjs.com/package/plural-ro) package

```bash
npm i -S plural-ro
```
## Explanation
> In compound numerals bigger than 100, the elements form a simple string without a connector : 101 – o sută unu,
  113 – o sută treisprezece, 1.025 – o mie douăzeci şi cinci, 1.003 – o mie trei, 1.019 – o mie nouăsprezece, 1.037 – o
  mie treizeci şi şapte, 1.245 – o mie două sute patruzeci şi cinci, etc. The preposition de after numerals over 100 is not required if the numeral in the final position is not bigger that 19 (such as: 101 o sută unu, 206 două sute şase, 1.018 o mie optsprezece, 3.519 trei mii cinci sute nouăsprezece): 105 cărţi – o sută cinci cărţi, 1319 cărţi – o mie trei sute nouăsprezece cărţi, etc. If a numeral between 20 and 99 is in the final position, the preposition de must be used : 120 de cărţi – o sută douăzeci de cărţi, 1322 de cărţi – o mie trei sute douăzeci şi două de cărţi, etc.  

*Romanian Grammar by Dana Cojocaru*
## Usage
Basic usage
```js
const pluralro = require('plural-ro').pluralro;
// import { pluralro } from 'plural-ro';

pluralro(1, 'obliect', 'obiecte'); // 1 obliect
pluralro(1, 'obliect', 'obiecte', 'n'); // un obliect
pluralro(1, 'obliect', 'obiecte', 'n', true); // Un obliect
pluralro(0, 'obliect', 'obiecte', 'n'); // niciun obliect
pluralro(0, 'obliect', 'obiecte', 'n', true); // Niciun obliect

pluralro(123, 'sticla', 'sticle'); // 123 de sticle
pluralro(1, 'sticla', 'sticle', 'f'); // o sticla
pluralro(1, 'sticla', 'sticle', 'f', true); // O sticla
pluralro(0, 'sticla', 'sticle', 'f'); // nicio sticla
pluralro(1, 'sticla', 'sticle', 'f', true); // Nicio sticla
```

## API
## Functions

<dl>
<dt><a href="#de">de(number)</a> ⇒ <code>boolean</code></dt>
<dd><p>Appends &quot;de&quot; preposition if a numeral between 20 and 99 is in the final position.</p>
</dd>
<dt><a href="#pluralro">pluralro(count, singularWord, pluralWord, replaceOne, ucfirst)</a> ⇒ <code>string</code></dt>
<dd><p>Automatically display the correct form of the nouns in the romanian language when counted.</p>
</dd>
</dl>

<a name="de"></a>

## de(number) ⇒ <code>boolean</code>
Appends "de" preposition if a numeral between 20 and 99 is in the final position.

**Kind**: global function  
**Returns**: <code>boolean</code> - If should append "de" preposition  

| Param |
| --- |
| number | 

<a name="pluralro"></a>

## pluralro(count, singularWord, pluralWord, replaceOne, ucfirst) ⇒ <code>string</code>
Automatically display the correct form of the nouns in the romanian language when counted.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| count | <code>number</code> |  | Count |
| singularWord | <code>string</code> |  | Singular form |
| pluralWord | <code>string</code> |  | Plural form |
| replaceOne | <code>string</code> \| <code>boolean</code> | <code>false</code> | The gender of the noun |
| ucfirst | <code>boolean</code> | <code>false</code> |  |


---

#### You may also want to try [inttorowords](https://github.com/alexcambose/inttorowords) for converting numbers into romanian words.

---
## License
[MIT](LICENSE)
