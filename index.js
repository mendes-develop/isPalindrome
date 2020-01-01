function isPalindrome(string){
  return string.toLowerCase() === string.split('').reverse().join('').toLowerCase()
}