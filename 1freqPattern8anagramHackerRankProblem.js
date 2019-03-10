// Two words are anagrams of one another if their letters can be rearranged to form the other word.

// In this challenge, you will be given a string. You must split it into two contiguous substrings, 
// then determine the minimum number of characters to change to make the two substrings into anagrams of 
// one another.

// For example, given the string 'abccde', you would break it into two parts: 'abc' and 'cde'. Note that all 
// letters have been used, the substrings are contiguous and their lengths are equal. Now you can change 'a' 
// and 'b' in the first substring to 'd' and 'e' to have 'dec' and 'cde' which are anagrams. Two changes were 
// necessary.
// Function Description

// Complete the anagram function in the editor below. It should return the minimum number of characters to change to make the words anagrams, or  if it's not possible.

// anagram has the following parameter(s):

// s: a string
// Input Format

// The first line will contain an integer, , the number of test cases. 
// Each test case will contain a string  which will be concatenation of both the strings described above in the problem. 
// The given string will contain only characters in the range ascii[a-z].

// Constraints

 
//  consists only of characters in the range ascii[a-z].
// Output Format

// For each test case, print an integer representing the minimum number of changes required to make an anagram. Print  if it is not possible.


// Sample Input/Output
// aaabbb = 3
// ab = 1
// abc = -1
// mnop = 2
// xyyx = 0
// xaxbbbxx = 1