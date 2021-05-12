const get = () => {
  return 'Get'
}

const ifThisConsonant = (character) => {
  let consonants = { b: true, c: true, d: true, f: true, g: true, h: true, j: true, k: true, l: true, m: true, n: true, p: true, q: true, r: true, s: true, t: true, v: true, w: true, x: true, z: true };
  return consonants[character]
}

const put = (words) => {
  words = words.toLowerCase()
  pirateWord = '';
  for (let i = 0; i < words.length; i++) {
    if (ifThisConsonant(words[i])) {
      pirateWord = pirateWord + words[i] + 'o' + words[i];
    }
    else {
      pirateWord = pirateWord + words[i];
    }
  }
  return pirateWord;
}
module.exports = { get, put }