// 205. Isomorphic Strings
// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters.
// No two characters may map to the same character, but a character may map to itself.

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

var isIsomorphic = function(s, t) {
    
    let findPos = function(str) {
        let posStr = "";
        let posObj = {};
        
        for (let i = 0; i < str.length; i++) {
            if (!(str[i] in posObj)) {
                posObj[str[i]] = i;
            }
            posStr += ` ${posObj[str[i]]}`;
        };
        return posStr;
    };
  
    str1 = findPos(s);
    str2 = findPos(t);

    return (str1 === str2);
};

// let s = "egg";
// let t = "add";

// let s = "foo";
// let t = "bar";

let s = "paper";
let t = "title";

console.log(isIsomorphic(s, t))