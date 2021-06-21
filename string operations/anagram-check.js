//checking Anagram using inbuilt array functions

const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false

    _str1 = str1.split('').sort().join('');
    _str2 = str2.split('').sort().join('');

    if(_str1.length !== _str2.length) return false
    return true
}


console.log(checkAnagram('vine','niev'));
//checking anagram using for loops

function checkAnagramUsingLoop(a, b) {
        var array = {};
        if (a === b) {
            return true;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (let i = 0; i < a.length; i++) {
            let res = a.charCodeAt(i) - 97;
            array[res] = (array[res] || 0) + 1;
        }

        for (let j = 0; j < b.length; j++) {
            let res = b.charCodeAt(j) - 97;
            if (!array[res]) {
                return false;
            }
            array[res]--;
        }
        return true;
    }

console.log(checkAnagramUsingLoop('vine','niev'));
