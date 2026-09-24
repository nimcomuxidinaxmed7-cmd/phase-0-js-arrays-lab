function calculateTax(amount) {
  return amount * 0.1;
}

function convertToUpperCase(text) {
  return text.toUpperCase();
}

function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

function isPalindrome(word) {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split("").reverse().join("");

  return lowerWord === reversedWord;
}

function calculateDiscountedPrice(price, discount) {
  return price - (price * discount / 100);
}