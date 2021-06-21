//checking Anagram using inbuilt array functions

const checkAnagram = (str1, str2) => {
    if(str1.length !== str2.length) return false

    _str1 = str1.split('').sort().join('');
    _str2 = str2.split('').sort().join('');

    if(_str1.length !== _str2.length) return false
    return true
}

console.log(checkAnagram('vine','niev'));
