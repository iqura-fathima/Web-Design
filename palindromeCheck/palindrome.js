function checkPalindrome() {
    var word = document.getElementById('text').value;
    var reversedWord = word.split('').reverse().join('');

    if (word === reversedWord) {
        document.getElementById('output').textContent = word+"  is a palindrome";
    } else {
        document.getElementById('output').textContent = word+" is not a palindrome!!!!!!";
    }
}
