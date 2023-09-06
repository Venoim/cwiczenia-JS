const ALPHABET_LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

const normalizedArray = (arr) => {
  const polacz = arr.join("");
  const unif = polacz.toLowerCase();
  const generationArr = unif.split("");

  return generationArr;
};

const searchBackLetter = (normalizedArr) => {
  const firstLetter = normalizedArr[0];
  const lastLetter = normalizedArr[normalizedArr.length - 1];
  const firstIndex = ALPHABET_LETTERS.findIndex((char) => char === firstLetter);
  const endIndex = ALPHABET_LETTERS.findIndex((char) => char === lastLetter);
  console.log({
    normalizedArr,
    ALPHABET_LETTERS,
    firstLetter,
    lastLetter,
    firstIndex,
    endIndex,
  });
  let j = 0;
  for (let i = firstIndex; i < endIndex; i++) {
    const orignialChar = normalizedArr[j];
    const alphabetChar = ALPHABET_LETTERS[i];
    if (orignialChar !== alphabetChar) {
      return ALPHABET_LETTERS[i];
    }
    j += 1;
  }
};

const caseChaking = (arr) => {
  const polacz = arr.join("");
  if (polacz === polacz.toUpperCase()) {
    return true;
  }
  return false;
};

function findMissingLetter(array) {
  const isCapitalized = caseChaking(array);
  const normalizedArr = normalizedArray(array);
  const result = searchBackLetter(normalizedArr);

  return isCapitalized ? result.toUpperCase() : result.toLowerCase();
}

// function findMissingLetter(array) {
//   const normalizedArray = (arr) => {
//     const polacz = arr.join("");
//     console.log(polacz);
//     const unif = polacz.toLowerCase();
//     const generationArr = unif.split("");
//     console.log(generationArr);
//     return generationArr;
//   };
//   const alfabetLetter = () => {
//     const alfabet = "abcdefghijklmnopqrstuvwxyz";
//     const letter = alfabet.split("");
//     return letter;
//   };
//   const lostLetter = [];
//   const searchBackLetter = (letters) => {
//     console.log(letters[0]);
//     const alfabet = alfabetLetter();
//     console.log(alfabet);
//     const firstIndex = alfabet.findIndex((index) => index === letters[0]);
//     console.log(firstIndex);
//     const endIndex = alfabet.findIndex(
//       (index) => index === letters[letters.length - 1]
//     );
//     console.log(endIndex);
//     for (let i = firstIndex; i < endIndex; i++) {
//       if (letters[i] !== alfabet[i]) {
//         if (letters[i] !== alfabet[i]) console.log("brak");
//         lostLetter.push(alfabet[i]);
//       }
//       console.log("jest taka liera");
//       continue;
//     }
//   };
//   const result = [];
//   const caseChaking = (arr) => {
//     const polacz = arr.join("");
//     if (polacz === polacz.toUpperCase()) {
//       result.push(lostLetter[0].toUpperCase());
//     } else {
//       result.push(lostLetter[0]);
//     }
//   };
//   searchBackLetter(normalizedArray(array));
//   caseChaking(array);
//   return result[0];
// }
