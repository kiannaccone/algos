// are all the letters lowercase

function removeVowels (vowel) {
    const vowelArr = vowel.split('');
    for (var x = 0; x < vowel.length; x++) {
      var char = vowel[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        vowelArr[x] = '';
      }
    }
    return vowelArr.join('');
}

function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
  }