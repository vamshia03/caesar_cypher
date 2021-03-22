function getCaesarCipher(originalText, shiftDirection, shiftValue) {
  const strLength = originalText.length;
  let output = "";

  for (let i = 0; i < strLength; i++) {
    output += getEncryptedCode(originalText[i], shiftDirection, shiftValue);
  }

  return output;
}

function getEncryptedCode(char, shiftDirection, shiftValue) {
  const lowerAlphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const upperAlphabetArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const asciiValue = char.charCodeAt(0);
  if (asciiValue >= 65 && asciiValue <= 90) {
    return getChar(upperAlphabetArr, char, shiftDirection, shiftValue);
  } else if (asciiValue >= 97 && asciiValue <= 122) {
    return getChar(lowerAlphabetArr, char, shiftDirection, shiftValue);
  }
  return char;
}

function getChar(alphabetArr, char, shiftDirection, shiftValue) {
  let encryptIndex;
  const index = alphabetArr.indexOf(char);
  if (shiftDirection.toLowerCase() === "left") {
    let positionVal = index - shiftValue;
    if (positionVal < 0) {
      positionVal += 26;
    }
    encryptIndex = positionVal % 26;
  } else {
    encryptIndex = (index + shiftValue) % 26;
  }
  return alphabetArr[encryptIndex];
}

module.exports = getCaesarCipher;
