/*
    The first argument’s 'raw' value can be any iterable, even a string!
    For example, 'test' is treated as ['t', 'e', 's', 't'].
    The following is equivalent to
    `t${0}e${1}s${2}t`:
*/

let zipped =  String.raw({ raw: 'test' }, 0, 1, 2);
console.log(`zipped: ${zipped}`); // 't0e1s2t'

/*
    For the zip trick to work, value in raw object should be an array for modifications
    and that array length must be longer than the amount of arguments passed
    in String.raw ; The data type
    returned from String.raw is of course a string.
 */

// value of raw array must have more elements than its substitution
zipped = String.raw({raw: [1, 2, 3]}, 4, 5); // notice raw has more elements than its substitution
console.log(`zipped: ${zipped}`); // 14253 ;

/*
    zipMalfunction will be an unwanted result because the
    array length in raw is equal to the amount of arguments passed from the second argument to the end
*/

const zipMalfunction = String.raw({raw: [1, 2, 3]}, 4, 5, 6);
console.log(`zipMalfunction: ${zipMalfunction}`); // 1, 4, 2, 5, 3 ; 6 is ignored

/*
	We want to zip two arrays with example:
    [1, 2, 3] and [4, 5, 6, 7, 8] => '14253678'

    To work around the previous problem, String.padEnd() will be used
*/

const substitutionArguments = [4, 5, 6, 7, 8]; // raw <= substitutions
let rawArray = [1, 2, 3];

/*
    The comma in padEnd will be used to split and substitutionArguments.length
    is added by 1 because raw must have more elements than its substitution
 */

if (rawArray <= substitutionArguments) {
    rawArray = rawArray.join('').padEnd(substitutionArguments.length + 1, ',').split('');
}

zipped = String.raw({raw: [...rawArray]}, ...substitutionArguments).split(',').join(''); // remove comma from raw String by split and rejoin
console.log(`zipped: ${zipped}`); // 14253678

zipped = zipped.split(''); // turn string into an array
console.log(`zipped: ${zipped}`); // ['1', '4', '2', '5', '3', '6', '7', '8']

zipped = zipped.map((stringElement) => Number(stringElement)); // change string number to datatype number
console.log(`zipped: ${zipped[0]}`); // [1, 4, 2, 5, 3, 6, 7, 8]
