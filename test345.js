// 345. Reverse Vowels of a String

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

// Input: s = "hello"
// Output: "holle"

// Input: s = "leetcode"
// Output: "leotcede"



let s = "hello";

var reverseVowels = function(s) {
    const vowelList = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let sArray = Array.from(s);
    let sVowels = [];
    
    for (let i = 0; i < s.length; i++) {
        if (vowelList.includes(s[i])) {
            sVowels.push(s[i]);
        };
    };

    // sVowels = sVowels.reverse();

    for (let i = 0; i < s.length; i++) {
        if (vowelList.includes(s[i])) {
            sArray[i] = sVowels.pop()
        }
    }

    return sArray.join("");

};


console.log(reverseVowels(s));